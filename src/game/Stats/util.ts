import { tStats } from './type'
import { ZERO_STATS } from './constants'
import { undefAdd } from '../../util/undefAdd'

export const combineStats = (...stats: tStats[]) => {
  return stats.reduce(
    (result, stats) => ({
      vigor: result.vigor + stats.vigor,
      strength: result.strength + stats.strength,
      intelligence: result.intelligence + stats.intelligence,
      dexterity: result.dexterity + stats.dexterity,
      charisma: result.charisma + stats.charisma,
      agility: result.agility + stats.agility,
      luck: result.luck + stats.luck,

      armor: result.armor + stats.armor,
      resistance: result.resistance + stats.resistance,
      evasion: result.evasion + stats.evasion,

      maxHealthOffset: result.maxHealthOffset + stats.maxHealthOffset,
      healthRegeneration: result.healthRegeneration + stats.healthRegeneration,
      damageTakenModifier:
        result.damageTakenModifier + stats.damageTakenModifier,
      damageTakenRangeModifiers: {
        melee:
          result.damageTakenRangeModifiers.melee +
          stats.damageTakenRangeModifiers.melee,
        ranged:
          result.damageTakenRangeModifiers.ranged +
          stats.damageTakenRangeModifiers.ranged,
      },
      damageReflection: {
        melee: result.damageReflection.melee + stats.damageReflection.melee,
        ranged: result.damageReflection.ranged + stats.damageReflection.ranged,
      },

      attackDamageOffset: result.attackDamageOffset + stats.attackDamageOffset,
      attackDamageModifier:
        result.attackDamageModifier + stats.attackDamageModifier,
      criticalChance: result.criticalChance + stats.criticalChance,
      damageModifiers: {
        flying: result.damageModifiers.flying + stats.damageModifiers.flying,
        undead: result.damageModifiers.undead + stats.damageModifiers.undead,
      },

      queueConsolidationModifier:
        result.queueConsolidationModifier + stats.queueConsolidationModifier,
      queueValueSet: undefAdd(result.queueValueSet, stats.queueValueSet),

      goldModifier: result.goldModifier + stats.goldModifier,
      maxInspirationOffset:
        result.maxInspirationOffset + stats.maxInspirationOffset,
      consumableHealthGainOffset:
        result.consumableHealthGainOffset + stats.consumableHealthGainOffset,
      minHealthOffset: result.minHealthOffset + stats.minHealthOffset,
    }),
    ZERO_STATS,
  )
}

export const multiplyStats = (stats: tStats, modifier: number): tStats => ({
  vigor: stats.vigor * modifier,
  strength: stats.strength * modifier,
  intelligence: stats.intelligence * modifier,
  dexterity: stats.dexterity * modifier,
  charisma: stats.charisma * modifier,
  agility: stats.agility * modifier,
  luck: stats.luck * modifier,

  armor: stats.armor * modifier,
  resistance: stats.resistance * modifier,
  evasion: stats.evasion * modifier,

  maxHealthOffset: stats.maxHealthOffset * modifier,
  healthRegeneration: stats.healthRegeneration * modifier,
  damageTakenModifier: stats.damageTakenModifier * modifier,
  damageTakenRangeModifiers: {
    melee: stats.damageTakenRangeModifiers.melee * modifier,
    ranged: stats.damageTakenRangeModifiers.ranged * modifier,
  },
  damageReflection: {
    melee: stats.damageReflection.melee * modifier,
    ranged: stats.damageReflection.ranged * modifier,
  },

  attackDamageOffset: stats.attackDamageOffset * modifier,
  attackDamageModifier: stats.attackDamageModifier * modifier,
  criticalChance: stats.criticalChance * modifier,
  damageModifiers: {
    flying: stats.damageModifiers.flying * modifier,
    undead: stats.damageModifiers.undead * modifier,
  },

  queueConsolidationModifier: stats.queueConsolidationModifier * modifier,
  queueValueSet: stats.queueValueSet,

  goldModifier: stats.goldModifier * modifier,
  maxInspirationOffset: stats.maxInspirationOffset * modifier,
  consumableHealthGainOffset: stats.consumableHealthGainOffset * modifier,
  minHealthOffset: stats.minHealthOffset * modifier,
})
