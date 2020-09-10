import { tParty } from '../Party/type'
import { tWeapon } from '../Weapon/type'
import { tArmor } from '../Armor/type'
import { tConsumable } from '../Consumable/type'
import { tBaseStats } from '../Stats/type'
import { tStatusType } from '../Status/type'

export type tEncounterType = 'combat' | 'shop' | 'rest' | 'reward' | 'shrine'
export interface tEncounter {
  id: string
  choiceId: string
  name: string
  type: tEncounterType
  reward: tEncounterReward
}
export interface tCombatEncounter extends tEncounter {
  party: tParty
}
export interface tShopEncounter extends tEncounter {
  items: (tWeapon | tArmor | tConsumable)[]
  costs: Record<string, number>
}
export interface tShrineEncounter extends tEncounter {
  stat: keyof tBaseStats
  offset: number
  rolls: number
  results: tEncounterReward[]
}

export interface tEncounterReward {
  gold: number
  xp: number
  items: (tArmor | tWeapon | tConsumable)[]
  status: tStatusType[]
  immunities: tStatusType[]
}

export interface tEncounterChoice {
  id: string
  depth: number
  value: 'left' | 'right' | undefined
  left: tEncounter
  right: tEncounter
}
