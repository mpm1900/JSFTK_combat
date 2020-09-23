import { tParty } from '../Party/type'
import { tWeapon } from '../Weapon/type'
import { tArmor } from '../Armor/type'
import { tConsumable } from '../Consumable/type'
import { tBaseStats } from '../Stats/type'
import { tStatusType } from '../Status/type'
import { tCharacter } from '../Character/type'
import { EncounterArrayT } from '../../grid/types'

export type tEncounterType =
  | 'combat'
  | 'shop'
  | 'shrine'
  | 'boss'
  | 'reward'
  | 'smith'
export interface tEncounter {
  id: string
  name: string
  type: tEncounterType
  reward: tEncounterReward
  completed: boolean
  seen: boolean
  blocking: boolean
}
export interface tCombatEncounter extends tEncounter {
  party: tParty
  isElite: boolean
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
export interface tRewardEncounter extends tCombatEncounter {
  isMimic: boolean
  isOpened: boolean
}
export interface tEncounterReward {
  gold: number
  xp: number
  items: (tArmor | tWeapon | tConsumable)[]
  status: tStatusType[]
  immunities: tStatusType[]
}
export interface tFloorConfig {
  floorId: string
  items: (tWeapon | tArmor)[]
  enemies: Record<number, tCharacter[][]>
  altEnemies: Record<number, tCharacter[][]>
  eliteEnemies: Record<number, tCharacter[][]>
  mimic: () => tCharacter
  bosses: tCharacter[]
  altBosses: tCharacter[]
}
export interface tFloor2 {
  id: string
  name: string
  depth: number
  size: number
  encounters: EncounterArrayT
}
