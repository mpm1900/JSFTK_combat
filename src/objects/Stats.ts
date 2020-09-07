import { tStats, tBaseStats } from '../game/Stats/type'

export const DAMAGE_BONUS_KEYS: (keyof tStats)[] = [
  'goldModifier',
  'attackDamageOffset',
  'attackDamageModifier',
  'criticalChance',
]
export const DEFENSE_BONUS_KEYS: (keyof tStats)[] = [
  'armor',
  'resistance',
  'evasion',
  'healthRegeneration',
  'damageReflection',
]
export const HEALTH_FOCUS_BONUS_KEYS: (keyof tStats)[] = ['maxHealthOffset']
export const STAT_BONUS_KEYS: (keyof tBaseStats)[] = [
  'vigor',
  'strength',
  'intelligence',
  'dexterity',
  'charisma',
  'agility',
  'luck',
]
