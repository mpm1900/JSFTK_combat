import { WeaponT, ProcessedWeaponT } from './Weapon'
import { EntityT } from './core'
import { ArmorT } from './Armor'
import { StatusT, CharacterStatusT } from './Status'
import { SkillT } from './Skill'
import { StatsT } from './Stats'

export type CharacterClassT = 'blacksmith' | 'hunter' | 'scholar' | 'bard'

export interface CharacterT extends EntityT {
  partyId: string
  level: number
  class: CharacterClassT
  stats: StatsT
  traits: []
  weapon: WeaponT
  armor: ArmorT[]
  status: CharacterStatusT[]
  isCharacter: true
}

export interface ProcessedCharacterT extends CharacterT {
  processed: true
  health: number
  weapon: ProcessedWeaponT
  statusEffects: StatusT[]
  skills: SkillT[]
  dead: boolean
}
