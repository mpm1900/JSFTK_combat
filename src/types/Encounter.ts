import { EntityT } from './core'
import { ArmorT } from './Armor'
import { WeaponT } from './Weapon'
import { ConsumableT } from './Consumable'
import { CheckT } from './Roll'
import { CharacterStatusT } from './Status'
import { tParty } from '../game/Party/type'
import { tWeapon } from '../game/Weapon/type'
import { tArmor } from '../game/Armor/type'

export type EncounterTypeT = 'combat' | 'shop' | 'rest' | 'reward' | 'shrine'
export interface EncounterT extends EntityT {
  type: EncounterTypeT
  reward: EncounterRewardT
}
export interface CombatEncounterT extends EncounterT {
  party: tParty
}
export interface ShopEncounterT extends EncounterT {
  weapons: tWeapon[]
  armor: tArmor[]
  consumables: ConsumableT[]
  costs: Record<string, number>
}
export interface ShrineEncounterT extends EncounterT {
  check: CheckT[]
  results: Record<number, EncounterRewardT>
}

export interface EncounterRewardT {
  gold: number
  xp: number
  items: (ArmorT | WeaponT)[]
  consumables: ConsumableT[]
  status: CharacterStatusT[]
}

export interface EncounterChoiceT {
  value: 'left' | 'right' | undefined
  left: EncounterT
  right: EncounterT
}
