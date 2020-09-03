import { CharacterT, PartyT, ProcessedPartyT, EntityT } from '../types'
import {
  checkForProcessedCharacter,
  processCharacter,
  makeEnemy,
} from './Character'
import { makeEntity } from './Entity'

export const isParty = (e: EntityT) => e && (e as PartyT).isParty

export const checkForProcessedParty = (party: PartyT) => {
  if ((party as ProcessedPartyT).processed) {
    throw new Error('No Processed Parties Allowed')
  }
  party.characters.forEach((character) => {
    checkForProcessedCharacter(character)
  })
}

export const makeParty = (characterCount: number = 0): PartyT => {
  return {
    ...makeEntity(),
    isParty: true,
    characters: Array(characterCount)
      .fill(null)
      .map((_, i) => {
        return makeEnemy()
      }),
  }
}

export const findCharacterInParty = <
  T extends PartyT = PartyT,
  R extends CharacterT = CharacterT
>(
  party: T,
  id: string,
): R | undefined => {
  return (party.characters as R[]).find((c) => c.id === id)
}

export const updateCharacter = (
  party: PartyT,
  characterId: string,
  updater: (character: CharacterT) => CharacterT,
): PartyT => {
  checkForProcessedParty(party)
  return {
    ...party,
    characters: party.characters.map((c) =>
      c.id === characterId ? updater(c) : c,
    ),
  }
}

export const processParty = (party: PartyT): ProcessedPartyT => {
  return {
    ...party,
    processed: true,
    characters: party.characters.map((c) => ({
      ...processCharacter(c),
      partyId: party.id,
    })),
  }
}
