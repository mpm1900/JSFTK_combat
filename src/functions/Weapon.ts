import { WeaponT, ProcessedWeaponT } from '../types'

export const processWeapon = (weapon: WeaponT): ProcessedWeaponT => {
  const damage = weapon.traits.reduce((p, c) => {
    return {
      ...p,
      damage: p.damage + c.damage,
    }
  }, weapon.damage)
  return {
    ...weapon,
    damage,
    processed: true,
  }
}
