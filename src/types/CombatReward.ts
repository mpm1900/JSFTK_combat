import { ArmorT } from './Armor'
import { WeaponT } from './Weapon'
import { ConsumableT } from './Consumable'

export interface CombatRewardT {
  gold: number
  xp: number
  items: (ArmorT | WeaponT)[]
  consumables: ConsumableT[]
}
