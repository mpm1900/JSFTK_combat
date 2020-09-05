import { WeaponT, ProcessedWeaponT } from './Weapon'
import { EntityT } from './core'
import { ArmorT } from './Armor'
import { StatusT, CharacterStatusT } from './Status'
import { SkillT } from './Skill'
import { StatsT } from './Stats'
import { ConsumableT } from './Consumable'

export type CharacterClassT =
  | 'blacksmith'
  | 'hunter'
  | 'scholar'
  | 'bard'
  | 'enemy'

export interface CharacterT extends EntityT {
  partyId: string
  level: number
  class: CharacterClassT
  stats: StatsT
  traits: []
  weapon: WeaponT
  armor: ArmorT[]
  consumables: ConsumableT[]
  status: CharacterStatusT[]
  immunities: CharacterStatusT[]
  isCharacter: true
}

export interface ProcessedCharacterT extends CharacterT {
  processed: true
  health: number
  weapon: ProcessedWeaponT
  statusEffects: StatusT[]
  skills: SkillT[]
  rawStats: StatsT
  dead: boolean
}
