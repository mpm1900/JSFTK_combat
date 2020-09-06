import { WeaponT, ProcessedWeaponT } from './Weapon'
import { EntityT } from './core'
import { ArmorT } from './Armor'
import { StatusT, CharacterStatusT } from './Status'
import { SkillT } from './Skill'
import { StatsT } from './Stats'
import { ConsumableT } from './Consumable'
import { CombatRewardT } from './CombatReward'

export type CharacterClassT =
  | 'blacksmith'
  | 'hunter'
  | 'scholar'
  | 'bard'
  | 'enemy'

export interface CharacterT extends EntityT {
  partyId: string
  level: number
  xp: number
  icon?: string
  class: CharacterClassT
  stats: StatsT
  traits: []
  weapon: WeaponT
  armor: ArmorT[]
  consumables: ConsumableT[]
  status: CharacterStatusT[]
  immunities: CharacterStatusT[]
  isCharacter: true
  possibleRewards: CombatRewardT[]
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
