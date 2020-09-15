import { v4 } from 'uuid'
import { tSkill } from '../../Skill/type'
import { ZERO_STATS } from '../../Stats/constants'
import { tStats } from '../../Stats/type'
import { tStatusType } from '../../Status/type'
import { tWeapon, tWeaponType } from '../type'
import { GLOBAL_DAMAGE_OFFSETS, WEAPON_DAMAGE_CONFIG } from './damage'
import { BASE_WEAPON_TYPES_GOLD, WEAPON_CLASS_GOLD_OFFSETS } from './goldValue'
import { WEAPON_CLASS_RARIES } from './rarity'
import { DEFAULT_WEAPON_TYPE_STATS } from './stats'
import { tWeaponClass } from './type'
import { DEFAULT_WEAPON_TYPE_CONFIG } from './typeConfig'

export const createWeapon = (
  weaponType: tWeaponType,
  weaponClass: tWeaponClass,
  skills: tSkill[],
  stats: Partial<tStats>,
  immunities: tStatusType[] = [],
  goldValue?: number,
): tWeapon => {
  const damageValue =
    WEAPON_DAMAGE_CONFIG[weaponClass][weaponType] +
    GLOBAL_DAMAGE_OFFSETS[weaponType]
  const { stat, twoHand, range, damageType } = DEFAULT_WEAPON_TYPE_CONFIG[
    weaponType
  ]
  const rarity = WEAPON_CLASS_RARIES[weaponClass]
  const defaultStats = DEFAULT_WEAPON_TYPE_STATS[weaponType]
  return {
    id: v4(),
    name: `${weaponClass} ${weaponType}`,
    rarity,
    itemType: 'weapon',
    goldValue:
      goldValue ||
      BASE_WEAPON_TYPES_GOLD[weaponType] +
        WEAPON_CLASS_GOLD_OFFSETS[weaponClass],
    type: weaponType,
    twoHand,
    breakable: false,
    damage: {
      value: damageValue,
      type: damageType,
      range,
    },
    stat,
    skills,
    stats: {
      ...ZERO_STATS,
      ...defaultStats,
      ...stats,
    },
    immunities,
  }
}

export const createBreakableWeapon = (
  weaponType: tWeaponType,
  weaponClass: tWeaponClass,
  skills: tSkill[],
  stats: Partial<tStats>,
  immunities: tStatusType[] = [],
  goldValue?: number,
): tWeapon => {
  return {
    ...createWeapon(
      weaponType,
      weaponClass,
      skills,
      stats,
      immunities,
      goldValue,
    ),
    breakable: true,
  }
}
