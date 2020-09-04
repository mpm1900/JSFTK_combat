import { WeaponT, ProcessedWeaponT } from '../types'

export const processWeapon = (weapon: WeaponT): ProcessedWeaponT => {
  return {
    ...weapon,
    processed: true,
  }
}
