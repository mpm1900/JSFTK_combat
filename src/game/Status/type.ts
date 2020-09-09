import { tStats } from '../Stats/type'

export type tStatusType =
  // ailments
  | 'bleeding'
  | 'burning'
  | 'cursed'
  | 'frozen'
  | 'poisoned'
  | 'shocked'
  | 'stunned'
  | 'wet'
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
