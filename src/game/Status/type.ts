import { tStats } from '../Stats/type'

export type tStatusType =
  // ailments
  | 'bleeding'
  | 'burning'
  | 'frozen'
  | 'poisoned'
  | 'shocked'
  | 'stunned'
  | 'wet'
  | 'cursed-vigor'
  | 'cursed-strength'
  | 'cursed-dexterity'
  | 'cursed-intelligence'
  | 'cursed-charisma'
  | 'cursed-luck'
  | 'cursed-agility'
  // buffs
  | 'armor-up'
  | 'attack-up'
  | 'evade-up'
  | 'resistance-up'
  | 'speed-up'
  // debuffs
  | 'armor-down'
  | 'attack-down'
  | 'evade-down'
  | 'resistance-down'
  | 'speed-down'
  // queue
  | 'rushed'
  | 'interrupted'
  | 'reset'
  // special
  | 'protected'
  | 'evasive'
  | 'resilient'
  | 'targeted'
  | 'cure'
  | 'blessed'
export interface tStatus {
  type: tStatusType
  stats: tStats
  immunities: tStatusType[]
  duration: number
  stack: number
}
export interface tStatusConfig {
  name: string
  description: string
  canStack: boolean
  isTemporary: boolean
  duration: number
  stats: tStats
  immunities: tStatusType[]
}
