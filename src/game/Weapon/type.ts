import { tDamage } from '../Damage/type'
import { tBaseStats, tStats } from '../Stats/type'
import { tItem } from '../Item/type'
import { tSkill } from '../Skill/type'
import { tStatus } from '../Status/type'

export type tWeaponType =
  | 'enemy'
  | 'axe'
  | 'blunt'
  | 'bow'
  | 'dagger'
  | 'pistol'
  | 'lute'
  | 'magic-staff'
  | 'spear'
  | 'sword'
  | 'tome'
  | 'torch'
export interface tWeapon extends tItem {
  type: tWeaponType
  twoHand: boolean
  breakable: boolean
  damage: tDamage
  stat: keyof tBaseStats

  skills: tSkill[]
  stats: tStats
  immunities: tStatus[]
}
