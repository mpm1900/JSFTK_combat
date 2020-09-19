import { tCharacter, tProcessedCharacter, tCharacterClass } from './type'
import { tStats, tBaseStats } from '../Stats/type'
import { capStats, combineStats } from '../Stats/util'
import { tSkill } from '../Skill/type'
import { CLASS_STATS } from '../Stats/constants'
import { tStatusType } from '../Status/type'
import { STATUS_CONFIG } from '../Status/constants'
import { v4 } from 'uuid'
import { tDamage } from '../Damage/type'
import { noneg } from '../../util/noneg'
import { CLASS_WEAPONS } from '../Weapon/constants'
import { tWeapon } from '../Weapon/type'
import { tArmorResourceType, tArmor } from '../Armor/type'
import { resolveCheck } from '../Roll/util'
import { CLASS_ARMOR } from '../Armor/constants'
import { considateConsumableListToStack } from '../Consumable/util'
import { CHARACTER_XP_MAX } from './constants'
import { tEncounterReward } from '../Encounter/type'
import { FISTS } from '../Weapon/fists'
import { CLASS_STARTING_CONSUMABLES } from '../Item/constants'

export const isCharacter = (obj: any): boolean =>
  obj !== undefined && obj.isCharacter !== undefined

export const checkForProcessedCharacter = (character: tCharacter) => {
  if ((character as tProcessedCharacter).processed) {
    throw new Error('No Processed Characters Allowed')
  }
}

export const makeCharacter = (characterClass: tCharacterClass): tCharacter => {
  return {
    isCharacter: true,
    id: v4(),
    name: '',
    partyId: '',
    level: 0,
    experience: 0,
    class: characterClass,

    stats: CLASS_STATS[characterClass],
    healthOffset: 0,
    inspirationOffset: 0,

    tags: [],

    weapon: CLASS_WEAPONS[characterClass],
    armor: CLASS_ARMOR[characterClass],
    consumables: CLASS_STARTING_CONSUMABLES[characterClass],

    status: [],
    immunities: [],
    possibleRewards: [],
  }
}

export const getSkills = (character: tCharacter): tSkill[] => {
  return [
    ...(character.weapon || FISTS()).skills,
    ...character.armor.reduce((r, a) => [...r, ...a.skills], [] as tSkill[]),
    ...considateConsumableListToStack(character.consumables).reduce(
      (r, s) => [...r, s.consumable.skill],
      [] as tSkill[],
    ),
  ]
}

export const processCharacter = (
  character: tCharacter,
): tProcessedCharacter => {
  checkForProcessedCharacter(character)
  const stats: tStats = capStats(
    combineStats(
      character.stats,
      (character.weapon || FISTS()).stats,
      ...character.armor.map((a) => a.stats),
      ...character.status.map((s) => s.stats),
    ),
  )
  const skills = getSkills(character)
  const statusImmunities = character.status.reduce(
    (r, s) => [...r, ...s.immunities],
    [] as tStatusType[],
  )
  const immunities = [
    ...character.immunities,
    ...(character?.weapon?.immunities || []),
    ...character.armor.reduce(
      (r, a) => [...r, ...a.immunities],
      [] as tStatusType[],
    ),
    ...statusImmunities,
  ]
  const baseVigor = CLASS_STATS[character.class].vigor || character.stats.vigor
  const startingHealth = 25 + Math.floor(0.1 * baseVigor)
  const maxHealth =
    Math.floor(
      startingHealth + character.level + 0.1 * character.level * stats.vigor,
    ) + stats.maxHealthOffset
  const health = maxHealth - character.healthOffset
  const maxInspiration = 3 + stats.maxInspirationOffset
  const inspiration = maxInspiration + character.inspirationOffset

  return {
    processed: true,
    ...character,

    health,
    maxHealth,
    inspiration,
    maxInspiration,

    weapon: character.weapon || FISTS(),
    stats,
    immunities,
    rawStats: character.stats,
    skills,
  }
}

export const getBaseStatValue = (
  character: tProcessedCharacter,
  key: keyof tBaseStats,
  offset: number = 0,
) => {
  return character.stats[key] + offset
}

export const getDamageResistance = (
  character: tProcessedCharacter,
  damage: tDamage,
) => {
  if (damage.type === 'physical') return character.stats.armor
  if (damage.type === 'magic') return character.stats.resistance
  return 0
}
export const hasStatus = (character: tCharacter, statusType: tStatusType) => {
  return character.status.map((s) => s.type).includes(statusType)
}
export const hasAnyStatus = (
  character: tCharacter,
  statusTypes: tStatusType[],
) => {
  return statusTypes.some((type) => hasStatus(character, type))
}
export const findStatus = (character: tCharacter, statusType: tStatusType) => {
  return character.status.find((s) => s.type === statusType)
}
export const hasImmunity = (character: tCharacter, statusType: tStatusType) => {
  return character.immunities.includes(statusType)
}
export const getReflectedDamage = (target: tCharacter, rawDamage: tDamage) => {
  return {
    ...rawDamage,
    value: target.stats.damageReflection[rawDamage.range],
  }
}
export const getRawDamage = (
  source: tProcessedCharacter,
  target: tProcessedCharacter,
  rawDamage: tDamage,
): tDamage => {
  let damageModifier = 1
  target.tags.forEach((tag) => {
    if (source.stats.damageModifiers[tag]) {
      damageModifier += source.stats.damageModifiers[tag]
    }
  })
  return {
    ...rawDamage,
    value: rawDamage.value * damageModifier,
  }
}

export const commitDamage = (
  character: tCharacter,
  damage: tDamage,
  ignoreResistance: boolean,
): tCharacter => {
  checkForProcessedCharacter(character)
  const pc = processCharacter(character)
  const resistance = ignoreResistance ? 0 : getDamageResistance(pc, damage)
  const damageTakenModifier =
    pc.stats.damageTakenModifier +
    pc.stats.damageTakenRangeModifiers[damage.range]
  const rawDamageValue = damage.value * damageTakenModifier
  if (hasStatus(character, 'protected')) {
    return {
      ...character,
      status: character.status.filter((s) => s.type !== 'protected'),
    }
  }
  return {
    ...character,
    healthOffset: Math.ceil(
      character.healthOffset + noneg(rawDamageValue - resistance),
    ),
  }
}

export const decrementStatusDurations = (character: tCharacter): tCharacter => {
  checkForProcessedCharacter(character)
  return {
    ...character,
    status: character.status
      .map((status) => ({ ...status, duration: status.duration - 1 }))
      .filter((status) => status.duration !== 0),
  }
}
export const addStatus = (
  character: tCharacter,
  type: tStatusType,
  durationOverride?: number,
): tCharacter => {
  checkForProcessedCharacter(character)
  const statusConfig = STATUS_CONFIG[type]
  const existingStatus = findStatus(character, type)
  if (hasImmunity(processCharacter(character), type)) {
    return character
  }
  if (existingStatus && !statusConfig.canStack) {
    return character
  }
  if (existingStatus && statusConfig.canStack) {
    return {
      ...character,
      status: [
        ...character.status.filter((s) => s.type !== type),
        { ...existingStatus, stack: existingStatus.stack + 1 },
      ],
    }
  }
  return {
    ...character,
    status: [
      ...character.status,
      {
        type,
        stats: statusConfig.stats,
        immunities: statusConfig.immunities,
        duration: durationOverride || statusConfig.duration,
        stack: 1,
      },
    ],
  }
}

export const addMultipleStatus = (
  character: tCharacter,
  types: tStatusType[],
): tCharacter => {
  return types.reduce((result, type) => {
    return addStatus(result, type)
  }, character)
}

export const checkStatus = (character: tCharacter) => {
  checkForProcessedCharacter(character)
  let c = { ...character }
  character.status.forEach((status) => {
    if (hasImmunity(processCharacter(character), status.type)) {
      c = {
        ...c,
        status: c.status.filter((c) => c.type !== status.type),
      }
    }
  })
  return c
}

export const removeTemporaryStatus = (character: tCharacter): tCharacter => {
  checkForProcessedCharacter(character)
  return {
    ...character,
    status: character.status.filter((s) => {
      const config = STATUS_CONFIG[s.type]
      return !config.isTemporary
    }),
  }
}

export const equipArmor = (
  character: tCharacter,
  armor: tArmor,
): { character: tCharacter; armor: tArmor | undefined } => {
  checkForProcessedCharacter(character)
  const existingArmor = character.armor.find(
    (a) => a.resource === armor.resource,
  )
  return {
    character: {
      ...character,
      armor: existingArmor
        ? [...character.armor.filter((a) => a.id !== existingArmor.id), armor]
        : [...character.armor, armor],
    },
    armor: existingArmor,
  }
}

export const unequipArmor = (
  character: tCharacter,
  resource: tArmorResourceType,
): { character: tCharacter; armor: tArmor | undefined } => {
  checkForProcessedCharacter(character)
  const armor = character.armor.find((a) => a.resource === resource)
  return {
    character: {
      ...character,
      armor: character.armor.filter((a) => a.resource !== resource),
    },
    armor,
  }
}

export const equipWeapon = (
  character: tCharacter,
  weapon: tWeapon,
): { character: tCharacter; weapon: tWeapon | undefined } => {
  const existingWeapon = character.weapon
  return {
    character: {
      ...character,
      weapon,
    },
    weapon: existingWeapon,
  }
}

// DO NOT USE
export const unequipWeapon = (
  character: tCharacter,
): { character: tCharacter; weapon: tWeapon | undefined } => {
  const existingWeapon = character.weapon
  return {
    character: {
      ...character,
      // weapon: undefined
    },
    weapon: existingWeapon,
  }
}

export const getRewardsFromCharacter = (
  character: tProcessedCharacter,
  checkedCharacter: tProcessedCharacter,
): tEncounterReward[] => {
  let index: number | undefined = undefined
  if (character.possibleRewards.length === 1)
    return [character.possibleRewards[0]]
  character.possibleRewards.forEach((rewards, i) => {
    const luckReslt = resolveCheck(checkedCharacter, 'luck')
    if (luckReslt) {
      index = i
    }
  })
  if (index !== undefined) {
    return character.possibleRewards[index]
      ? [character.possibleRewards[index]]
      : []
  }
  return []
}

export const addExperience = (
  character: tCharacter,
  xp: number,
): tCharacter => {
  checkForProcessedCharacter(character)
  const xpToNextLevel = CHARACTER_XP_MAX[character.level]
  const experience = character.experience + xp
  if (experience > xpToNextLevel) {
    return addExperience(
      levelUp({
        ...character,
        experience,
      }),
      0,
    )
  }
  return {
    ...character,
    experience,
  }
}

export const levelUp = (character: tCharacter): tCharacter => {
  checkForProcessedCharacter(character)
  const experience = character.experience - CHARACTER_XP_MAX[character.level]
  return {
    ...character,
    level: character.level + 1,
    healthOffset: noneg(Math.floor(character.healthOffset / 2) - 15),
    experience,
    status: character.status.filter((s) => s.type !== 'poisoned'),
  }
}
