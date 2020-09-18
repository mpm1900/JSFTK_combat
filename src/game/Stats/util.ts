import { tStats } from './type'
import { ZERO_STATS } from './constants'
import { undefAdd } from '../../util/undefAdd'
import { noneg } from '../../util'

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
        beast: result.damageModifiers.beast + stats.damageModifiers.beast,
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
    beast: stats.damageModifiers.beast * modifier,
  },

  queueConsolidationModifier: stats.queueConsolidationModifier * modifier,
  queueValueSet: stats.queueValueSet,

  goldModifier: stats.goldModifier * modifier,
  maxInspirationOffset: stats.maxInspirationOffset * modifier,
  consumableHealthGainOffset: stats.consumableHealthGainOffset * modifier,
  minHealthOffset: stats.minHealthOffset * modifier,
})

const isCapKey = (key: keyof tStats) => {
  const keys: (keyof tStats)[] = [
    'vigor',
    'strength',
    'dexterity',
    'intelligence',
    'charisma',
    'agility',
    'luck',
    'evasion',
    'criticalChance',
  ]
  return keys.includes(key)
}

export const capStats = (stats: tStats): tStats => {
  return (Object.keys(stats) as (keyof tStats)[]).reduce((result, key) => {
    if (isCapKey(key) && stats[key]) {
      return {
        ...result,
        [key]: (stats[key] as number) > 95 ? 95 : stats[key],
      }
    }
    return {
      ...result,
      armor: noneg(result.armor),
      resistance: noneg(result.resistance),
    }
  }, stats)
}
