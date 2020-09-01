import {
  CharacterT,
  ProcessedCharacterT,
  StatsT,
  TraitT,
  DamageTypeT,
  StatusTypeT,
  CheckT,
  CharacterClassT,
} from '../types'
import { STATUS_EFFECTS, CLASS_STARTING_STATS } from '../objects'
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

export const checkForProcessedCharacter = (character: CharacterT) => {
  if ((character as ProcessedCharacterT).processed) {
    throw new Error('No Processed Characters Allowed')
  }
}

export const getStatusEffects = (character: CharacterT) => {
  return character.status.map((status) => STATUS_EFFECTS[status.type])
}

export const getTraits = (character: CharacterT): TraitT[] => {
  checkForProcessedCharacter(character)
  return [
    ...character.traits,
    ...character.weapon.traits,
    ...getTraitsFromObjects(character.armor),
    ...getTraitsFromObjects(getStatusEffects(character)),
  ]
}

export const getSkills = (character: CharacterT) => {
  checkForProcessedCharacter(character)
  return [...character.weapon.skills, ...getSkillsFromObjects(character.armor)]
}

export const processCharacter = (
  character: CharacterT,
): ProcessedCharacterT => {
  checkForProcessedCharacter(character)
  const traits = getTraits(character)
  const combinedTrait = combineTraits(...traits)
  const stats: StatsT = combineStats(character.stats, combinedTrait.stats)
  const weapon = processWeapon(character.weapon)
  const statusEffects = getStatusEffects(character)
  const skills = getSkills(character)
  const startingHealth =
    25 + Math.floor(0.1 * CLASS_STARTING_STATS[character.class].vigor)
  const health = Math.floor(
    startingHealth + character.level + 0.1 * character.level * stats.vigor,
  )
  return {
    ...character,
    health,
    stats,
    weapon,
    statusEffects,
    skills,
    dead: stats.healthOffset >= health,
    processed: true,
  }
}

export const makeCharacter = (
  characterClass: CharacterClassT,
  partyId: string = '',
): CharacterT => {
  return {
    ...makeEntity(),
    partyId,
    level: 1,
    class: characterClass,
    stats: CLASS_STARTING_STATS[characterClass],
    traits: [],
    weapon: CLASS_STARTING_WEAPONS[characterClass],
    armor: [],
    status: [],
  }
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
export const commitStatusEffects = (character: CharacterT): CharacterT => {
  checkForProcessedCharacter(character)
  const statusEffects = getStatusEffects(character)
  const traits = getCommittedTraitsFromObjects(statusEffects)
  return traits.reduce(
    (char, trait) => {
      return commitTrait(char, trait)
    },
    { ...character },
  )
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
export const addStatus = (character: CharacterT, statusType: StatusTypeT) => {
  const statusEffect = STATUS_EFFECTS[statusType]
  const existingStatus = character.status.find((s) => s.type === statusType)
  if (existingStatus && !statusEffect.canStack) {
    return character
  }
  return {
    ...character,
    status: [
      ...character.status,
      { type: statusType, duration: statusEffect.duration },
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
