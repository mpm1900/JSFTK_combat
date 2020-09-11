import { tStats, tBaseStats } from './type'
import { tCharacterClass } from '../Character/type'

export const ZERO_STATS: tStats = {
  vigor: 0,
  strength: 0,
  intelligence: 0,
  dexterity: 0,
  charisma: 0,
  agility: 0,
  luck: 0,

  armor: 0,
  resistance: 0,
  evasion: 0,

  maxHealthOffset: 0,
  healthRegeneration: 0,
  damageTakenModifier: 0,
  damageReflection: {
    melee: 0,
    ranged: 0,
  },

  attackDamageOffset: 0,
  attackDamageModifier: 0,
  criticalChance: 0,
  damageModifiers: {
    flying: 0,
    undead: 0,
  },

  queueConsolidationModifier: 0,
  queueValueSet: undefined,

  goldModifier: 0,
  maxInspirationOffset: 0,
  consumableHealthGainOffset: 0,
  minHealthOffset: 0,
}

export const BASE_C_STATS: tStats = {
  ...ZERO_STATS,
  damageTakenModifier: 1,
  attackDamageModifier: 1,
  criticalChance: 5,
  damageModifiers: {
    flying: 0,
    undead: 0,
  },
  queueConsolidationModifier: 1,
  consumableHealthGainOffset: 15,
}

export const CLASS_STATS: Record<tCharacterClass, tStats> = {
  blacksmith: {
    ...BASE_C_STATS,
    strength: 76,
    vigor: 80,
    intelligence: 40,
    dexterity: 52,
    charisma: 72,
    agility: 56,
    luck: 50,
    armor: 2,
    resistance: 0,
    evasion: 7,
  },
  hunter: {
    ...BASE_C_STATS,
    strength: 52,
    vigor: 66,
    intelligence: 46,
    dexterity: 78,
    charisma: 64,
    agility: 78,
    luck: 50,
    armor: 1,
    resistance: 0,
    evasion: 20,
  },
  scholar: {
    ...BASE_C_STATS,
    strength: 42,
    vigor: 60,
    intelligence: 78,
    dexterity: 66,
    charisma: 70,
    agility: 70,
    luck: 50,
    armor: 0,
    resistance: 1,
    evasion: 13,
  },
  bard: {
    ...BASE_C_STATS,
    strength: 44,
    vigor: 50,
    intelligence: 70,
    dexterity: 68,
    charisma: 78,
    agility: 68,
    luck: 50,
    armor: 0,
    resistance: 1,
    evasion: 11,
  },
  hobo: {
    ...BASE_C_STATS,
    strength: 70,
    vigor: 70,
    intelligence: 70,
    dexterity: 70,
    charisma: 70,
    agility: 70,
    luck: 50,
    armor: 1,
    resistance: 1,
    evasion: 13,
  },
  enemy: BASE_C_STATS,
}

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
export const HEALTH_FOCUS_BONUS_KEYS: (keyof tStats)[] = [
  'maxHealthOffset',
  'maxInspirationOffset',
]
export const STAT_BONUS_KEYS: (keyof tBaseStats)[] = [
  'vigor',
  'strength',
  'intelligence',
  'dexterity',
  'charisma',
  'agility',
  'luck',
]

export const STAT_KEY_LABELS: Record<keyof tStats, string> = {
  strength: ' Strength',
  vigor: ' Vigor',
  intelligence: ' Intelligence',
  dexterity: ' Dexterity',
  charisma: ' Charisma',
  agility: ' Agility',
  luck: ' Luck',
  evasion: ' Evasion',
  criticalChance: '% Crit Chance',

  armor: ' Armor',
  resistance: ' Resistance',

  maxHealthOffset: ' Health',
  healthRegeneration: ' Health Regen',
  damageReflection: ' Damage Reflection',
  damageTakenModifier: '% Recieved Damage',

  // TODO: Make this work
  damageModifiers: ' Damage to certain Enemeies',

  queueConsolidationModifier: ' Queue Consolidation Modifier',
  queueValueSet: ' Queue Value Set',

  attackDamageOffset: ' Raw Damage',
  attackDamageModifier: '% Attack Damage',

  goldModifier: '% Gold Recieved',
  maxInspirationOffset: ' Max Inspiration',
  minHealthOffset: ' Minumum Health',
  consumableHealthGainOffset: ' HP from Consumables',
}
