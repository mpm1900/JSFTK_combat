import { tProcessedCharacter } from '../Character/type'
import {
  tSkill,
  tSourceSkillResult,
  tTargetSkillResult,
  tSkillResult,
  tSkillTarget,
  tSkillTargetType,
} from './type'
import { resolveCheck } from '../Roll/util'
import {
  getRawDamage,
  getReflectedDamage,
  isCharacter,
  hasStatus,
} from '../Character/util'
import { tProcessedParty } from '../Party/type'
import { isParty } from '../Party/util'
import { tDamage } from '../Damage/type'
import { tPerfectKey, PERFECT_DISPLAY_INFO } from './constants'

export const getSourceSkillResult = (
  source: tProcessedCharacter,
  skill: tSkill,
): tSourceSkillResult => {
  const rollResults = Array(skill.rolls)
    .fill(null)
    .map((_, i) =>
      resolveCheck(
        source,
        skill.weaponStatOverride || source.weapon.stat,
        skill.offset,
      ),
    )
  const passedCount = rollResults.filter((r) => r).length
  const perfect = passedCount === skill.rolls
  const criticalHitSuccess = resolveCheck(source, 'criticalChance')
  const rollDamageModifier = passedCount / skill.rolls
  return {
    source,
    skill,
    rollResults,
    passedCount,
    perfect,
    criticalHitSuccess: perfect && criticalHitSuccess,
    rawDamage: {
      ...source.weapon.damage,
      value: Math.round(
        source.weapon.damage.value * skill.damageModifier * rollDamageModifier,
      ),
      range: skill.weaponRangeOverride || source.weapon.damage.range,
    },
    splashDamage: {
      ...source.weapon.damage,
      value:
        perfect && skill.perfectSplash
          ? Math.round(source.weapon.damage.value * skill.splashDamageModifier)
          : 0,
      range: skill.weaponRangeOverride || source.weapon.damage.range,
    },
    ignoreResistance: perfect && skill.perfectPierce,
    addedStatus: perfect ? skill.perfectStatus : [],
  }
}

export const getTargetSkillResult = (
  target: tProcessedCharacter,
  sourceResult: tSourceSkillResult,
): tTargetSkillResult => {
  const dodgeResult = resolveCheck(target, 'evasion')
  const dodgeSuccess = hasStatus(target, 'evasive')
    ? !sourceResult.perfect
    : !sourceResult.perfect && dodgeResult
  const damage = getRawDamage(
    sourceResult.source,
    target,
    sourceResult.rawDamage,
  )
  return {
    ...sourceResult,
    target,
    dodgeSuccess,
    totalDamage: {
      ...damage,
      value: dodgeSuccess ? 0 : damage.value,
    },
    reflectedDamage: getReflectedDamage(target, damage),
  }
}

export const getSkillResult = (
  source: tProcessedCharacter,
  targets: tProcessedCharacter[],
  skill: tSkill,
): tSkillResult => {
  const sourceResult = getSourceSkillResult(source, skill)
  return {
    sourceResult,
    targetResults: targets.map((target) =>
      getTargetSkillResult(target, sourceResult),
    ),
  }
}

export const resolveSkillTarget = (
  target: tSkillTarget,
): tProcessedCharacter[] => {
  switch (target.type) {
    case 'single':
      return target.character ? [target.character] : []
    case 'ally':
      return target.character ? [target.character] : []
    case 'self':
      return target.character ? [target.character] : []
    case 'party':
      return target.party?.characters || []
    case 'group':
      return target.party?.characters || []
    default:
      return []
  }
}

export const makeSkillTarget = (
  type: tSkillTargetType,
  target: tProcessedCharacter | tProcessedParty,
): tSkillTarget => {
  return {
    type,
    character: isCharacter(target)
      ? (target as tProcessedCharacter)
      : undefined,
    party: isParty(target) ? (target as tProcessedParty) : undefined,
  }
}

export const getSkillTargetOptions = (
  source: tProcessedCharacter,
  sourceParty: tProcessedParty,
  targetParty: tProcessedParty,
  skill: tSkill,
): tProcessedCharacter[] | tProcessedParty[] => {
  switch (skill.targetType) {
    case 'single':
      return targetParty.characters.filter((c) => c.health > 0)
    case 'ally':
      return sourceParty.characters.filter((c) => c.health > 0)
    case 'group':
      return [targetParty]
    case 'party':
      return [sourceParty]
    case 'self':
      return [source]
    default:
      return []
  }
}

export const getSkillDamage = (
  skill: tSkill,
  source: tProcessedCharacter,
): tDamage => {
  return {
    ...source.weapon.damage,
    value:
      (source.weapon.damage.value + source.stats.attackDamageOffset) *
      (skill.damageModifier + source.stats.attackDamageModifier / 100),
  }
}

export const getPerfectKeys = (skill: tSkill): tPerfectKey[] => {
  let base: tPerfectKey[] = [...skill.perfectStatus]
  if (skill.perfectSplash) base = [...base, 'splash']
  if (skill.perfectPierce) base = [...base, 'pierce']
  if (skill.healing) base = [...base, 'heal']
  return base
}

export const getPerfectText = (
  skill: tSkill,
  character: tProcessedCharacter,
): string => {
  const perfectKeys = getPerfectKeys(skill)
  const rawDamage = getSkillDamage(skill, character)

  return perfectKeys.reduce((res, key, i) => {
    let pre = `${res}${i > 0 ? ',' : ''}`
    const text = PERFECT_DISPLAY_INFO[key]
    switch (key) {
      case 'splash':
        return `${pre} ${Math.floor(skill.splashDamageModifier * 100)}% ${text}`
      case 'heal':
        return `${pre} ${text} ${character.stats.consumableHealthGainOffset} HP`
      default:
        return `${pre} ${text}`
    }
  }, '')
}
