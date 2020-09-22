import { v4 } from 'uuid'
import { tItemRarity } from '../../Item/type'
import { tSkill } from '../../Skill/type'
import { ZERO_STATS } from '../../Stats/constants'
import { tStats } from '../../Stats/type'
import { tStatusType } from '../../Status/type'
import { tArmor, tArmorResourceType, tArmorType } from '../type'

export const createArmor = (
  name: string,
  rarity: tItemRarity,
  resource: tArmorResourceType,
  type: tArmorType,
  goldValue: number,
  stats: Partial<tStats> = {},
  skills: tSkill[] = [],
  immunities: tStatusType[] = [],
): tArmor => {
  return {
    id: v4(),
    name,
    rarity,
    itemType: 'armor',
    resource,
    type,
    stat: 'vigor',
    goldValue,
    stats: {
      ...ZERO_STATS,
      ...stats,
    },
    skills,
    immunities,
    level: 0,
    upgrades: [],
  }
}

export const createFootwear = (
  name: string,
  rarity: tItemRarity,
  goldValue: number,
  stats: Partial<tStats> = {},
  skills: tSkill[] = [],
  immunities: tStatusType[] = [],
) =>
  createArmor(
    name,
    rarity,
    'feet',
    'footwear',
    goldValue,
    stats,
    skills,
    immunities,
  )

export const createHat = (
  name: string,
  rarity: tItemRarity,
  goldValue: number,
  stats: Partial<tStats> = {},
  skills: tSkill[] = [],
  immunities: tStatusType[] = [],
) =>
  createArmor(name, rarity, 'head', 'hat', goldValue, stats, skills, immunities)

export const createHeavyArmor = (
  name: string,
  rarity: tItemRarity,
  goldValue: number,
  stats: Partial<tStats> = {},
  skills: tSkill[] = [],
  immunities: tStatusType[] = [],
) =>
  createArmor(
    name,
    rarity,
    'body',
    'heavy-armor',
    goldValue,
    stats,
    skills,
    immunities,
  )

export const createHelmet = (
  name: string,
  rarity: tItemRarity,
  goldValue: number,
  stats: Partial<tStats> = {},
  skills: tSkill[] = [],
  immunities: tStatusType[] = [],
) =>
  createArmor(
    name,
    rarity,
    'head',
    'helmet',
    goldValue,
    stats,
    skills,
    immunities,
  )

export const createLightArmor = (
  name: string,
  rarity: tItemRarity,
  goldValue: number,
  stats: Partial<tStats> = {},
  skills: tSkill[] = [],
  immunities: tStatusType[] = [],
) =>
  createArmor(
    name,
    rarity,
    'body',
    'light-armor',
    goldValue,
    stats,
    skills,
    immunities,
  )

export const createMagicArmor = (
  name: string,
  rarity: tItemRarity,
  goldValue: number,
  stats: Partial<tStats> = {},
  skills: tSkill[] = [],
  immunities: tStatusType[] = [],
) =>
  createArmor(
    name,
    rarity,
    'body',
    'magic-armor',
    goldValue,
    stats,
    skills,
    immunities,
  )

export const createMagicHat = (
  name: string,
  rarity: tItemRarity,
  goldValue: number,
  stats: Partial<tStats> = {},
  skills: tSkill[] = [],
  immunities: tStatusType[] = [],
) =>
  createArmor(
    name,
    rarity,
    'head',
    'magic-hat',
    goldValue,
    stats,
    skills,
    immunities,
  )

export const createShield = (
  name: string,
  rarity: tItemRarity,
  goldValue: number,
  stats: Partial<tStats> = {},
  skills: tSkill[] = [],
  immunities: tStatusType[] = [],
) =>
  createArmor(
    name,
    rarity,
    'offhand',
    'shield',
    goldValue,
    stats,
    skills,
    immunities,
  )

export const createWard = (
  name: string,
  rarity: tItemRarity,
  goldValue: number,
  stats: Partial<tStats> = {},
  skills: tSkill[] = [],
  immunities: tStatusType[] = [],
) =>
  createArmor(
    name,
    rarity,
    'offhand',
    'ward',
    goldValue,
    stats,
    skills,
    immunities,
  )

export const createRing = (
  name: string,
  rarity: tItemRarity,
  goldValue: number,
  stats: Partial<tStats> = {},
  skills: tSkill[] = [],
  immunities: tStatusType[] = [],
) =>
  createArmor(
    name,
    rarity,
    'ring',
    'ring',
    goldValue,
    stats,
    skills,
    immunities,
  )

export const createPendant = (
  name: string,
  rarity: tItemRarity,
  goldValue: number,
  stats: Partial<tStats> = {},
  skills: tSkill[] = [],
  immunities: tStatusType[] = [],
) =>
  createArmor(
    name,
    rarity,
    'pendant',
    'pendant',
    goldValue,
    stats,
    skills,
    immunities,
  )
