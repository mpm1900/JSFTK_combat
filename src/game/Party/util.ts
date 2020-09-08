import { tParty, tProcessedParty } from './type'
import {
  checkForProcessedCharacter,
  processCharacter,
  getRewardsFromCharacter,
} from '../Character/util'
import { tCharacter, tProcessedCharacter } from '../Character/type'
import { v4 } from 'uuid'
import { tCombatReward } from '../Other/types'
import { getRandom } from '../../util'
import { ENEMY_COMBOS_BY_LEVEL } from './constants'

export const isParty = (obj: any): boolean => obj.isParty !== undefined

export const checkForProcessedParty = (party: tParty) => {
  if ((party as tProcessedParty).processed) {
    throw new Error('No Processed Parties Allowed')
  }
  party.characters.forEach((character) => {
    checkForProcessedCharacter(character)
  })
}

export const findCharacterInParty = <
  T extends tParty = tParty,
  R extends tCharacter = tCharacter
>(
  party: T,
  id: string,
): R | undefined => {
  return (party.characters as R[]).find((c) => c.id === id)
}

export const getOtherCharacters = (
  party: tParty,
  characterId: string,
): tCharacter[] => party.characters.filter((c) => c.id !== characterId)

export const processParty = (party: tParty): tProcessedParty => {
  checkForProcessedParty(party)
  return {
    ...party,
    processed: true,
    characters: party.characters.map((c) => ({
      ...processCharacter(c),
      partyId: party.id,
    })),
  }
}

export const updateCharacter = (
  party: tParty,
  characterId: string,
  updater: (character: tCharacter) => tCharacter,
): tParty => {
  checkForProcessedParty(party)
  return {
    ...party,
    characters: party.characters.map((c) =>
      c.id === characterId ? updater(c) : c,
    ),
  }
}

export const makeParty = (level: number = 0): tParty => {
  level = level > 4 ? 4 : level
  return {
    isParty: true,
    id: v4(),
    gold: 0,
    items: [],
    characters: getRandom(ENEMY_COMBOS_BY_LEVEL[level]),
  }
}

export const getRolledRewards = (
  party: tProcessedParty,
  checkedCharacter: tProcessedCharacter,
): tCombatReward[] => {
  return party.characters.reduce((r, character) => {
    return [...r, ...getRewardsFromCharacter(character, checkedCharacter)]
  }, [] as tCombatReward[])
}

export const commitRewards = (
  party: tParty,
  rewards: tCombatReward,
): tParty => {
  checkForProcessedParty(party)
  const goldMultiplier =
    1 +
    processParty(party).characters.reduce(
      (r, c) => (r > c.stats.goldModifier ? r : c.stats.goldModifier),
      0,
    ) /
      100
  return {
    ...party,
    gold: party.gold + Math.floor(rewards.gold * goldMultiplier),
    items: [...party.items, ...rewards.items],
    characters: party.characters.map((c) => ({
      ...c,
      consumables: [...c.consumables, ...rewards.consumables],
      experience: c.experience + rewards.xp,
    })),
  }
}
