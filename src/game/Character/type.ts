import { tStats } from '../Stats/type'
import { tWeapon } from '../Weapon/type'
import { tSkill } from '../Skill/type'
import { tStatus, tStatusType } from '../Status/type'
import { tArmor } from '../Armor/type'
import { tConsumable } from '../Consumable/type'
import { tEncounterReward } from '../Encounter/type'

export type tCharacterTag = 'flying' | 'undead' | 'beast'
export type tCharacterClass =
  | 'executioner'
  | 'ranger'
  | 'reaper'
  | 'student'
  | 'patrician'
  | 'drifter'
  | 'enemy'
export interface tCharacter {
  isCharacter: true
  id: string
  name: string
  partyId: string
  experience: number
  level: number
  class: tCharacterClass
  icon?: string

  stats: tStats
  healthOffset: number
  inspirationOffset: number

  tags: tCharacterTag[]

  weapon?: tWeapon
  armor: tArmor[]
  consumables: tConsumable[]

  status: tStatus[]
  immunities: tStatusType[]
  possibleRewards: tEncounterReward[]
}

export interface tProcessedCharacter extends tCharacter {
  processed: true

  health: number
  maxHealth: number
  inspiration: number
  maxInspiration: number
  weapon: tWeapon

  rawStats: tStats

  skills: tSkill[]
}
