import { tCharacterTag } from '../Character/type'
import { tDamageRange } from '../Damage/type'

export interface tBaseStats {
  vigor: number
  strength: number
  intelligence: number
  dexterity: number
  charisma: number
  agility: number
  luck: number
  criticalChance: number
  evasion: number
}
export interface tCombatStats {
  armor: number
  resistance: number
}
export interface tStats extends tBaseStats {
  // COMBAT
  armor: number
  resistance: number
  evasion: number

  // DEFENSE
  maxHealthOffset: number
  healthRegeneration: number // recur
  damageTakenModifier: number
  damageTakenRangeModifiers: {
    melee: number
    ranged: number
  }
  damageReflection: Record<tDamageRange, number>

  // DAMAGE
  attackDamageOffset: number
  attackDamageModifier: number
  criticalDamageModifier: number
  damageModifiers: Record<tCharacterTag, number>

  // QUEUE
  // of what % to move each round,
  // 0 would halt, 1 is normal
  queueConsolidationModifier: number
  // dangerously set, each round, this is added the character's queue value,
  // should be 0 almost always
  queueValueSet: number | undefined // recur

  // OTHER
  goldModifier: number
  maxInspirationOffset: number
  consumableHealthGainOffset: number

  // STATUS SPECIFIC
  minHealthOffset: number // to prevent dealth
}
