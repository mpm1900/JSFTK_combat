import { EntityT } from './core'
import { CharacterT, ProcessedCharacterT } from './Character'
import { ArmorT } from './Armor'
import { WeaponT } from './Weapon'

export interface PartyT extends EntityT {
  characters: CharacterT[]
  items: (ArmorT | WeaponT)[]
  isParty: true
}

export interface ProcessedPartyT extends PartyT {
  characters: ProcessedCharacterT[]
  processed: true
}
