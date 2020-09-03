import { DamageT } from '../types'

export const getSplashDamage = (rawDamage: DamageT) => {
  return {
    type: rawDamage.type,
    damage: Math.floor(rawDamage.damage / 2),
  }
}
