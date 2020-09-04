import { PartyT, TargetSkillResultT, CharacterT } from '../types'
import { updateCharacter } from './Party'
import {
  addStatusAndTags,
  getDamageResistance,
  processCharacter,
  decrementStatusDurations,
} from './Character'
import { PLAYER_PARTY_ID } from '../objects/Party'
import { noneg } from '../util'

const localUpdater = (
  p: PartyT,
  id: string,
  updater: (c: CharacterT) => CharacterT,
) => {
  return updateCharacter(p, id, updater)
}

interface CommitSkillResultsT {
  party: PartyT
  enemyParty: PartyT
}
export const commitSkillResults = (party: PartyT, enemyParty: PartyT) => (
  results: TargetSkillResultT[],
): CommitSkillResultsT => {
  results.forEach((result, index) => {
    const { source, target } = result
    let sourceParty = [party, enemyParty].find(
      (p) => p.id === source.partyId,
    ) as PartyT
    let targetParty = [party, enemyParty].find(
      (p) => p.id === target.partyId,
    ) as PartyT
    const localUpdate = (
      p: PartyT,
      id: string,
      updater: (c: CharacterT) => CharacterT,
    ) => {
      if (p.id === sourceParty.id) {
        sourceParty = localUpdater(p, id, updater)
        return
      }
      if (p.id === targetParty.id) {
        targetParty = localUpdater(p, id, updater)
        return
      }
    }

    localUpdate(targetParty, target.id, (c) => {
      return addStatusAndTags(
        {
          ...c,
          stats: {
            ...c.stats,
            healthOffset: c.stats.healthOffset + result.totalDamage.damage,
          },
        },
        result.addedStatus.map((s) => s.type),
      )
    })

    if (result.splashDamage.damage > 0) {
      targetParty.characters
        .filter((c) => c.id !== result.target.id)
        .forEach((character) => {
          localUpdate(targetParty, character.id, (c) => {
            const splashDamageResistance = getDamageResistance(
              processCharacter(character),
              result.splashDamage.type,
            )
            return {
              ...c,
              stats: {
                ...c.stats,
                healthOffset:
                  c.stats.healthOffset +
                  (result.splashDamage.damage - splashDamageResistance),
              },
            }
          })
        })
    }

    if (result.reflectedDamage.damage > 0 && !result.willDie) {
      localUpdate(sourceParty, source.id, (c) => {
        // TODO: consider adding in reflected resistance here
        return {
          ...c,
          stats: {
            ...c.stats,
            healthOffset: c.stats.healthOffset + result.reflectedDamage.damage,
          },
        }
      })
    }

    if (index === results.length - 1) {
      if (result.regeneratedHealth > 0) {
        localUpdate(sourceParty, source.id, (c) => {
          return {
            ...c,
            stats: {
              ...c.stats,
              healthOffset: noneg(
                c.stats.healthOffset - result.regeneratedHealth,
              ),
            },
          }
        })
      }
    }

    if (sourceParty.id === PLAYER_PARTY_ID) {
      party = sourceParty
    } else {
      enemyParty = sourceParty
    }
    if (targetParty.id === PLAYER_PARTY_ID) {
      if (sourceParty.id !== PLAYER_PARTY_ID) {
        party = targetParty
      }
    } else {
      enemyParty = targetParty
    }
  })
  return {
    party: {
      ...party,
      characters: party.characters.map((c) => decrementStatusDurations(c)),
    },
    enemyParty: {
      ...enemyParty,
      characters: enemyParty.characters.map((c) => decrementStatusDurations(c)),
    },
  }
}
