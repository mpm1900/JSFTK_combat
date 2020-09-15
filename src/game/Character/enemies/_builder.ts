import { tArmor } from '../../Armor/type'
import { tConsumable } from '../../Consumable/type'
import { tDamageRange, tDamageType } from '../../Damage/type'
import { ZERO_REWARD } from '../../Encounter/constants'
import { tEncounterReward } from '../../Encounter/type'
import { tSkill } from '../../Skill/type'
import { BASE_C_STATS } from '../../Stats/constants'
import { tBaseStats, tStats } from '../../Stats/type'
import { tStatus, tStatusType } from '../../Status/type'
import { BASE_WEAPON } from '../../Weapon/constants'
import { tWeapon } from '../../Weapon/type'
import { BASE_CHARACTER } from '../constants'
import { tCharacter, tCharacterTag } from '../type'

export const makeEnemy = (
  name: string,
  icon: string,
  level: number,
  health: number,
  weapon: tWeapon,
  stats: Partial<tStats>,
  tags: tCharacterTag[],
  possibleRewards: tEncounterReward[],
  immunities: tStatusType[] = [],
  status: tStatus[] = [],
): tCharacter => {
  const maxHealthOffset = health - 25 - level
  return {
    ...BASE_CHARACTER(),
    name,
    icon,
    level,
    stats: {
      ...BASE_C_STATS,
      ...stats,
      maxHealthOffset,
      vigor: 0,
    },
    tags,
    weapon,
    immunities,
    status,
    possibleRewards,
  }
}

export const makeEnemyWeapon = (
  stat: keyof tBaseStats,
  damage: number,
  range: tDamageRange,
  type: tDamageType,
  skills: tSkill[],
): tWeapon => {
  return {
    ...BASE_WEAPON(),
    name: '',
    stat,
    damage: {
      value: damage,
      range,
      type,
    },
    skills,
  }
}

export const makeEnemyReward = (
  gold: number,
  xp: number,
  items: (tConsumable | tWeapon | tArmor)[] = [],
): tEncounterReward => {
  return {
    ...ZERO_REWARD,
    gold,
    xp,
    items,
  }
}
