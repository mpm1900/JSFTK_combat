import { tParty } from '../Party/type'
import { tWeapon } from '../Weapon/type'
import { tArmor } from '../Armor/type'
import { tConsumable } from '../Consumable/type'
import { tBaseStats } from '../Stats/type'
import { tStatusType } from '../Status/type'
import { tCharacter } from '../Character/type'
import { EncounterArrayT } from '../../grid/types'

export type tEncounterType = 'combat' | 'shop' | 'shrine' | 'boss' | 'reward'
export interface tEncounter {
  id: string
  choiceId: string
  name: string
  type: tEncounterType
  reward: tEncounterReward
  completed: boolean
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
export interface tBossEncounter extends tCombatEncounter {
  boss: true
}
export interface tRewardEncounter extends tEncounter {}

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
  chosen: number | undefined
  choices: tEncounter[]
}

export interface tFloor {
  id: string
  name: string
  depth: number
  encounters: tEncounterChoice[]
}
export interface tFloorConfig {
  items: (tWeapon | tArmor)[]
  enemies: Record<number, tCharacter[][]>
  bosses: tCharacter[]
}

export interface tFloor2 {
  id: string
  name: string
  depth: number
  size: number
  encounters: EncounterArrayT
}
