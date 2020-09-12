import { tParty } from '../Party/type'
import { tCharacter } from '../Character/type'
import { updateCharacter, getOtherCharacters } from '../Party/util'
import { tQueue } from '../Queue/type'
import { tSkillResult, tSkillCommiterResult } from './type'
import {
  commitDamage,
  addMultipleStatus,
  decrementStatusDurations,
  processCharacter,
} from '../Character/util'
import { noneg } from '../../util/noneg'
import { commitQueueUpdates } from '../Queue/util'
import { PLAYER_PARTY_ID } from '../Party/constants'

const partyUpdater = (
  party: tParty,
  characterId: string,
  updater: (c: tCharacter) => tCharacter,
): tParty => {
  return updateCharacter(party, characterId, updater)
}

export const commitSkillResults = (
  playerParty: tParty,
  enemyParty: tParty,
  queue: tQueue,
) => (result: tSkillResult): tSkillCommiterResult => {
  const { source } = result.sourceResult
  result.targetResults.forEach((targetResult, index) => {
    const { target } = targetResult
    let sourceParty = [playerParty, enemyParty].find(
      (p) => p.id === source.partyId,
    ) as tParty
    let targetParty = [playerParty, enemyParty].find(
      (p) => p.id === target.partyId,
    ) as tParty
    const localUpdate = (
      p: tParty,
      id: string,
      updater: (c: tCharacter) => tCharacter,
    ) => {
      if (p.id === sourceParty.id) {
        sourceParty = partyUpdater(p, id, updater)
        return
      }
      if (p.id === targetParty.id) {
        targetParty = partyUpdater(p, id, updater)
        return
      }
      throw new Error('bad party id')
    }

    if (index === 0 && targetResult.weaponDidBreak) {
      localUpdate(sourceParty, source.id, (c) => {
        return {
          ...c,
          weapon: undefined,
        }
      })
    }

    // commit main damage
    localUpdate(targetParty, target.id, (c) => {
      return commitDamage(
        c,
        targetResult.totalDamage,
        targetResult.ignoreResistance,
      )
    })

    // commit main status
    localUpdate(targetParty, target.id, (c) => {
      return addMultipleStatus(c, targetResult.addedStatus)
    })

    // comit main heal
    if (targetResult.skill.healing) {
      localUpdate(targetParty, target.id, (c) => {
        return {
          ...c,
          healthOffset: c.healthOffset - c.stats.consumableHealthGainOffset,
          consumables: c.consumables.filter(
            (i) => i.id !== targetResult.skill.consumableId,
          ),
        }
      })
    }

    // commit splash damage
    if (targetResult.splashDamage.value > 0) {
      getOtherCharacters(targetParty, target.id).forEach((character) => {
        localUpdate(targetParty, character.id, (c) => {
          return commitDamage(c, targetResult.splashDamage, false)
        })
      })
    }

    // commit reflected damage
    if (targetResult.reflectedDamage.value > 0) {
      localUpdate(sourceParty, source.id, (c) => {
        return commitDamage(c, targetResult.reflectedDamage, false)
      })
    }

    // commet end-of-round actions
    if (index === result.targetResults.length - 1) {
      // source health regen
      localUpdate(sourceParty, source.id, (c) => {
        const pc = processCharacter(c)
        return {
          ...c,
          healthOffset: noneg(c.healthOffset - pc.stats.healthRegeneration),
        }
      })
    }

    if (sourceParty.id === PLAYER_PARTY_ID) {
      playerParty = sourceParty
    } else {
      enemyParty = sourceParty
    }
    if (targetParty.id === PLAYER_PARTY_ID) {
      if (sourceParty.id !== targetParty.id) {
        playerParty = targetParty
      }
    } else {
      enemyParty = targetParty
    }
  })

  return {
    playerParty: {
      ...playerParty,
      characters: playerParty.characters.map((c) =>
        decrementStatusDurations(c),
      ),
    },
    enemyParty: {
      ...enemyParty,
      characters: enemyParty.characters.map((c) => decrementStatusDurations(c)),
    },
    queue: commitQueueUpdates(queue, source, [
      ...playerParty.characters,
      ...enemyParty.characters,
    ]),
  }
}
