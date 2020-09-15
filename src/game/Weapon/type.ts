import { tDamage } from '../Damage/type'
import { tBaseStats, tStats } from '../Stats/type'
import { tItem } from '../Item/type'
import { tSkill } from '../Skill/type'
import { tStatus, tStatusType } from '../Status/type'

export type tWeaponType =
  | 'enemy'
  | 'axe'
  | 'hammer'
  | 'bow'
  | 'dagger'
  | 'pistol'
  | 'chime'
  | 'catalyst'
  | 'scythe'
  | 'sword'
  | 'greatsword'
  | 'fist'
export interface tWeapon extends tItem {
  type: tWeaponType
  twoHand: boolean
  breakable: boolean
  damage: tDamage
  stat: keyof tBaseStats

  skills: tSkill[]
  stats: tStats
  immunities: tStatusType[]
}
