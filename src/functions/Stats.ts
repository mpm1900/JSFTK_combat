import { StatsT } from '../types'
import { ZERO_STATS } from '../objects'

export const combineStats = (...stats: StatsT[]): StatsT => {
  console.log(...stats)
  return stats.reduce(
    (p, c) => ({
      vigor: p.vigor + c.vigor,
      strength: p.strength + c.strength,
      intelligence: p.intelligence + c.intelligence,
      perception: p.perception + c.perception,
      talent: p.talent + c.talent,
      agility: p.agility + c.agility,
      luck: p.luck + c.luck,
      armor: p.armor + c.armor,
      resistance: p.resistance + c.resistance,
      evasion: p.evasion + c.evasion,
      criticalChance: p.criticalChance + c.criticalChance,
      damageModifier: p.damageModifier + c.damageModifier,
      healthOffset: p.healthOffset + c.healthOffset,
    }),
    ZERO_STATS,
  )
}
