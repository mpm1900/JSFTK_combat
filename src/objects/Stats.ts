import { StatsT, CharacterClassT } from '../types'

export const ZERO_STATS: StatsT = {
  vigor: 0,
  strength: 0,
  intelligence: 0,
  perception: 0,
  talent: 0,

  agility: 0,
  luck: 0,
  armor: 0,
  resistance: 0,
  evasion: 0,

  healthOffset: 0,
  health: 0,
  healthRegen: 0,
  criticalChance: 0,
  damageModifier: 0,
}

export const CLASS_STARTING_STATS: Record<CharacterClassT, StatsT> = {
  blacksmith: {
    strength: 76,
    vigor: 80,
    intelligence: 40,
    perception: 52,
    talent: 72,
    agility: 56,
    luck: 50,
    armor: 2,
    resistance: 0,
    evasion: 7,
    healthOffset: 0,
    health: 0,
    healthRegen: 0,
    criticalChance: 5,
    damageModifier: 0,
  },
  hunter: {
    strength: 52,
    vigor: 66,
    intelligence: 46,
    perception: 78,
    talent: 64,
    agility: 78,
    luck: 50,
    armor: 1,
    resistance: 0,
    evasion: 20,
    healthOffset: 0,
    health: 0,
    healthRegen: 0,
    criticalChance: 5,
    damageModifier: 0,
  },
  scholar: {
    strength: 42,
    vigor: 60,
    intelligence: 78,
    perception: 66,
    talent: 70,
    agility: 70,
    luck: 50,
    armor: 0,
    resistance: 1,
    evasion: 13,
    healthOffset: 0,
    health: 0,
    healthRegen: 0,
    criticalChance: 5,
    damageModifier: 0,
  },
  bard: {
    strength: 44,
    vigor: 50,
    intelligence: 70,
    perception: 68,
    talent: 78,
    agility: 68,
    luck: 50,
    armor: 0,
    resistance: 1,
    evasion: 11,
    healthOffset: 0,
    health: 0,
    healthRegen: 0,
    criticalChance: 5,
    damageModifier: 0,
  },
  enemy: ZERO_STATS,
}