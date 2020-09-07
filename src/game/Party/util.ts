import { tParty, tProcessedParty } from './type'
import {
  checkForProcessedCharacter,
  processCharacter,
  getRewardsFromCharacter,
} from '../Character/util'
import { tCharacter, tProcessedCharacter } from '../Character/type'
import { v4 } from 'uuid'
import { CombatRewardT } from '../../types/CombatReward'

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
  return {
    isParty: true,
    id: v4(),
    gold: 0,
    items: [],
    characters: [],
  }
}

export const getRolledRewards = (
  party: tProcessedParty,
  checkedCharacter: tProcessedCharacter,
): CombatRewardT[] => {
  return party.characters.reduce((r, character) => {
    return [...r, ...getRewardsFromCharacter(character, checkedCharacter)]
  }, [] as CombatRewardT[])
}
