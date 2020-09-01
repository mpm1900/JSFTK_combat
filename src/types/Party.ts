import { EntityT } from './core'
import { CharacterT, ProcessedCharacterT } from './Character'

export interface PartyT extends EntityT {
  characters: CharacterT[]
  isParty: true
}

export interface ProcessedPartyT extends PartyT {
  characters: ProcessedCharacterT[]
  processed: true
}
