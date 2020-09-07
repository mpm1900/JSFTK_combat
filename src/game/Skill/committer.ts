import { tParty } from '../Party/type'
import { tCharacter } from '../Character/type'
import { updateCharacter, getOtherCharacters } from '../Party/util'
import { tQueue } from '../Queue/type'
import { tSkillResult, tSkillCommiterResult } from './type'
import {
  commitDamage,
  addMultipleStatus,
  decrementStatusDurations,
} from '../Character/util'
import { noneg } from '../../util/noneg'
import { commitQueueUpdates } from '../Queue/util'

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
      party: tParty,
      characterId: string,
      updater: (c: tCharacter) => tCharacter,
    ) => {
      if (party.id === sourceParty.id) {
        sourceParty = partyUpdater(party, characterId, updater)
      }
      if (party.id === targetParty.id) {
        targetParty = partyUpdater(party, characterId, updater)
      }
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

    // commit splash damage
    getOtherCharacters(targetParty, target.id).forEach((character) => {
      localUpdate(targetParty, character.id, (c) => {
        return commitDamage(c, targetResult.splashDamage, false)
      })
    })

    // commit reflected damage
    localUpdate(sourceParty, source.id, (c) => {
      return commitDamage(c, targetResult.reflectedDamage, false)
    })

    // commet end-of-round actions
    if (index === result.targetResults.length - 1) {
      // source health regen
      localUpdate(sourceParty, source.id, (c) => ({
        ...c,
        healthOffset: noneg(c.healthOffset - c.stats.healthRegeneration),
      }))
      // update queue
    }

    if (sourceParty.id === playerParty.id) {
      playerParty = sourceParty
    } else {
      enemyParty = sourceParty
    }
    if (targetParty.id === playerParty.id) {
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
