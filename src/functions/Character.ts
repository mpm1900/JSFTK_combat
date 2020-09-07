import {
  CharacterT,
  ProcessedCharacterT,
  StatsT,
  TraitT,
  DamageTypeT,
  StatusTypeT,
  CheckT,
  CharacterClassT,
  EntityT,
  WeaponT,
  StatusT,
  ArmorT,
  ArmorResourceType,
} from '../types'
import {
  combineTraits,
  getTraitsFromObjects,
  getCommittedTraitsFromObjects,
} from './Traits'
import { processWeapon } from './Weapon'
import { getSkillsFromObjects } from './Skill'
import { makeEntity } from './Entity'
import { combineStats } from './Stats'
import { CLASS_STARTING_WEAPONS } from '../objects/Weapon'
import { CLASS_STARTING_ARMOR } from '../objects/Armor'
import { ALL_ENEMIES } from '../objects/enemies'
import { getRandom, noneg } from '../util'
import { CLASS_STARTING_CONSUMABLES } from '../objects/Item'
import { makeCheck } from './makeCheck'
import { resolveCheck } from './Roll'
import { PROTECT } from '../objects/skills/protect'
import { CombatRewardT } from '../types/CombatReward'

export const checkForProcessedCharacter = (character: CharacterT) => {
  if ((character as ProcessedCharacterT).processed) {
    throw new Error('No Processed Characters Allowed')
  }
}

export const isCharacter = (e: EntityT) => e && (e as CharacterT).isCharacter

export const getSkills = (character: CharacterT) => {
  checkForProcessedCharacter(character)
  return [...character.weapon.skills, ...getSkillsFromObjects(character.armor)]
}

export const commitTrait = (
  character: CharacterT,
  trait: TraitT,
): CharacterT => {
  checkForProcessedCharacter(character)
  return {
    ...character,
    stats: combineStats(character.stats, trait.stats),
  }
}

export const decrementStatusDurations = (character: CharacterT): CharacterT => {
  checkForProcessedCharacter(character)
  return {
    ...character,
    status: character.status
      .map((status) => ({ ...status, duration: status.duration - 1 }))
      .filter((status) => status.duration !== 0),
  }
}
export const hasStatus = (character: CharacterT, statusType: StatusTypeT) => {
  return character.status.map((s) => s.type).includes(statusType)
}
export const hasImmunity = (character: CharacterT, statusType: StatusTypeT) => {
  return character.immunities.map((i) => i.type).includes(statusType)
}
export const findStatus = (character: CharacterT, statusType: StatusTypeT) => {
  return character.status.find((s) => s.type === statusType)
}
export const addStatus = (
  character: CharacterT,
  statusType: StatusTypeT,
  duration?: number,
) => {
  const statusEffect = STATUS_EFFECTS[statusType]
  const existingStatus = findStatus(character, statusType)
  if (hasImmunity(character, statusType)) {
    return character
  }
  if (existingStatus && !statusEffect.canStack) {
    return {
      ...character,
      status: [
        ...character.status.filter((t) => t.type !== statusType),
        { type: statusType, duration: duration || statusEffect.duration },
      ],
    }
  }
  if (existingStatus && statusEffect.canStack) {
    return {
      ...character,
      status: [
        ...character.status.filter((t) => t.type !== statusType),
        {
          type: statusType,
          duration: duration || statusEffect.duration,
          stack: (existingStatus.stack || 0) + 1,
        },
      ],
    }
  }
  return {
    ...character,
    status: [
      ...character.status,
      {
        type: statusType,
        duration: duration || statusEffect.duration,
        stack: 0,
      },
    ],
  }
}
export const addMultipleStatus = (
  character: CharacterT,
  statusTypes: StatusTypeT[],
) => {
  return statusTypes.reduce(
    (char, statusType) => {
      return addStatus(char, statusType)
    },
    { ...character },
  )
}

export const removeTemporaryStatus = (character: CharacterT): CharacterT => {
  checkForProcessedCharacter(character)
  return {
    ...character,
    status: character.status
      .map((s) => STATUS_EFFECTS[s.type])
      .filter((s) => s.persist),
  }
}

export const getCharacterStat = (character: CharacterT, statValue: CheckT) => {
  const resolvedStatValue = statValue.key ? character.stats[statValue.key] : 0
  return resolvedStatValue + (statValue.offset || 0)
}

export const getDamageResistance = (
  character: ProcessedCharacterT,
  damageType: DamageTypeT,
) => {
  if (damageType === 'physical') return character.stats.armor
  if (damageType === 'magic') return character.stats.resistance
  return 0
}

export const addStatusAndTags = (
  character: CharacterT,
  status: StatusTypeT[],
) => {
  return addMultipleStatus(character, status)
}

export const equipArmor = (
  character: CharacterT,
  armor: ArmorT,
): { character: CharacterT; armor: ArmorT | undefined } => {
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
  character: CharacterT,
  resource: ArmorResourceType,
): { character: CharacterT; armor: ArmorT | undefined } => {
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
  character: CharacterT,
  weapon: WeaponT,
): { character: CharacterT; weapon: WeaponT | undefined } => {
  const existingWeapon = character.weapon
  return {
    character: {
      ...character,
      weapon,
    },
    weapon: existingWeapon,
  }
}

export const unequipWeapon = (
  character: CharacterT,
): { character: CharacterT; weapon: WeaponT | undefined } => {
  const existingWeapon = character.weapon
  return {
    character: {
      ...character,
      // weapon: undefined
    },
    weapon: existingWeapon,
  }
}

export const commitDamage = (
  character: CharacterT,
  damage: number,
): CharacterT => {
  checkForProcessedCharacter(character)
  if (hasStatus(character, 'protected')) {
    return {
      ...character,
      status: character.status.filter((s) => s.type !== 'protected'),
    }
  } else {
    return {
      ...character,
      stats: {
        ...character.stats,
        healthOffset: noneg(character.stats.healthOffset + damage),
      },
    }
  }
}

export const getRewardsFromCharacter = (
  character: ProcessedCharacterT,
  checkedCharacter: ProcessedCharacterT,
): CombatRewardT[] => {
  let index: number | undefined = undefined
  character.possibleRewards.forEach((rewards, i) => {
    const luckReslt = resolveCheck(checkedCharacter, makeCheck('luck'))
    if (luckReslt.result) {
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

export const consolidateRewards = (rewards: CombatRewardT[]): CombatRewardT => {
  return rewards.reduce(
    (res, reward) => {
      return {
        gold: res.gold + reward.gold,
        xp: res.xp + reward.xp,
        items: [...res.items, ...reward.items],
        consumables: [...res.consumables, ...reward.consumables],
      }
    },
    {
      gold: 0,
      xp: 0,
      items: [],
      consumables: [],
    },
  )
}
