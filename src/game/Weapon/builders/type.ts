import { tDamageRange, tDamageType } from '../../Damage/type'
import { tItemRarity } from '../../Item/type'
import { tBaseStats, tStats } from '../../Stats/type'
import { tWeapon, tWeaponType } from '../type'

export type tWeaponClass =
  | 'starting'
  // LEVEL 1 ccc ur
  | 'rusted'
  | 'tomb'
  | 'burried'
  | 'withering'
  | 'glass'

  // LEVEL 2 ccc
  | 'iron'
  | 'steel'
  | 'stainless'

  // LEVEL 3 cu rr
  | 'ancient'
  | 'crystal'
  | 'elemental'
  | 'cursed'

  // LEVEL 4 cuu r
  | 'sharp'
  | 'hardened'
  | 'engraved'
  | 'ethereal'

  // LEVEL 5 rr mm
  | 'exquisite'
  | 'divine'
  | 'arcane'
  | 'celestial'

  // LEVEL 6
  | 'mythic'
  | 'unique'

export type tWeaponTypeDamageConfig = Record<tWeaponType, number>
export type tWeaponClassDamageConfig = Record<
  tWeaponClass,
  tWeaponTypeDamageConfig
>
export type tWeaponTypeConfig = Record<
  tWeaponType,
  {
    stat: keyof tBaseStats
    twoHand: boolean
    range: tDamageRange
    damageType: tDamageType
  }
>
export type tWeaponRarityConfig = Record<tWeaponClass, tItemRarity>
export type tWeaponStatsConfig = Record<tWeaponType, Partial<tStats>>
export type tWeaponsByLevel = Record<number, (() => tWeapon)[]>
