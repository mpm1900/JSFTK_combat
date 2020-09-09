import { tArmor } from '../Armor/type'
import { tWeapon } from '../Weapon/type'
import { tConsumable } from '../Consumable/type'

export interface tCombatReward {
  gold: number
  xp: number
  items: (tArmor | tWeapon)[]
  consumables: tConsumable[]
}
