import { tParty } from '../Party/type'
import { tWeapon } from '../Weapon/type'
import { tArmor } from '../Armor/type'
import { tConsumable } from '../Consumable/type'
import { tBaseStats } from '../Stats/type'
import { tStatusType } from '../Status/type'

export type tEncounterType = 'combat' | 'shop' | 'rest' | 'reward' | 'shrine'
export interface tEncounter {
  id: string
  name: string
  type: tEncounterType
  reward: tEncounterReward
}
export interface tCombatEncounter extends tEncounter {
  party: tParty
}
export interface tShopEncounter extends tEncounter {
  weapons: tWeapon[]
  armor: tArmor[]
  consumables: tConsumable[]
  costs: Record<string, number>
}
export interface tShrineEncounter extends tEncounter {
  check: { key: keyof tBaseStats; offset: number }[]
  results: Record<number, tEncounterReward>
}

export interface tEncounterReward {
  gold: number
  xp: number
  items: (tArmor | tWeapon)[]
  consumables: tConsumable[]
  status: tStatusType[]
}

export interface tEncounterChoice {
  value: 'left' | 'right' | undefined
  left: tEncounter
  right: tEncounter
}
