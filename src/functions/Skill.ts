import {
  ProcessedCharacterT,
  SourceSkillResultT,
  HasSkillsT,
  SkillT,
  DamageT,
  TargetSkillResultT,
  SkillTargetT,
  ProcessedPartyT,
  TargetTypeT,
  TagT,
} from '../types'
import { resolveCheck, getPassedCount, didAllPass } from './Roll'
import { getDamageResistance, isCharacter, hasTag, findTag } from './Character'
import { isParty } from './Party'
import { noneg } from '../util'
import { PerfectKeyT, PERFECT_DISPLAY_INFO } from '../objects/Skills'
import { getSplashDamage } from './Damage'

export const getSkillsFromObjects = (parents: HasSkillsT[]) => {
  return parents.reduce((p, c) => {
    return [...p, ...c.skills]
  }, [] as SkillT[])
}

export const resolveSkillTarget = (
  target: SkillTargetT,
): ProcessedCharacterT[] => {
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
  type: TargetTypeT,
  target: ProcessedCharacterT | ProcessedPartyT,
): SkillTargetT => {
  return {
    type,
    character: isCharacter(target)
      ? (target as ProcessedCharacterT)
      : undefined,
    party: isParty(target) ? (target as ProcessedPartyT) : undefined,
  }
}

export const getSourceSkillResult = (
  source: ProcessedCharacterT,
  skill: SkillT,
): SourceSkillResultT => {
  const rollResults = skill.rolls.map((check) => resolveCheck(source, check))
  const passedCount = getPassedCount(rollResults)
  const perfect = didAllPass(rollResults)
  const criticalHitResult = resolveCheck(source, {
    offset: source.stats.criticalChance,
  })
  const criticalSuccess = perfect ? criticalHitResult.result : false
  const accuracySuccess = passedCount >= 1

  const rawDamage: DamageT = {
    damage: Math.round(
      (passedCount * getSkillDamage(skill, source).damage) / rollResults.length,
    ),
    type: source.weapon.damage.type,
  }
  const splashDamage: DamageT =
    skill.perfectSplash && perfect
      ? getSplashDamage(rawDamage)
      : { type: rawDamage.type, damage: 0 }
  return {
    rollResults,
    skill,
    source,
    accuracySuccess,
    criticalSuccess,
    passedCount,
    perfect,
    rawDamage,
    pierce: (perfect && skill.perfectPierce) || criticalHitResult.result,
    splashDamage,
    addedStatus: perfect ? skill.perfectStatus : [],
    addedTags: perfect ? skill.perfectTags : [],
  }
}

export const getTargetSkillResult = (
  target: ProcessedCharacterT,
  sourceResult: SourceSkillResultT,
): TargetSkillResultT => {
  if (sourceResult.accuracySuccess) {
    const dodgeResult = resolveCheck(target, { key: 'evasion' })
    const damageResistances = sourceResult.pierce
      ? 0
      : getDamageResistance(target, sourceResult.rawDamage.type)
    const isEvasive = hasTag(target, 'evasive')
    const dodgeSuccess = sourceResult.criticalSuccess
      ? false
      : dodgeResult.result || (isEvasive && !sourceResult.perfect)
    const totalDamage = {
      type: sourceResult.rawDamage.type,
      damage: dodgeSuccess
        ? 0
        : noneg(Math.round(sourceResult.rawDamage.damage - damageResistances)),
    }
    const reflectedDamage = {
      damage: sourceResult.source.stats.damageReflection,
      type: sourceResult.rawDamage.type,
    }
    const healthRegenMaximum =
      sourceResult.source.stats.healthOffset + reflectedDamage.damage
    const regeneratedHealth =
      healthRegenMaximum > sourceResult.source.stats.healthRegen
        ? sourceResult.source.stats.healthRegen
        : healthRegenMaximum

    return {
      ...sourceResult,
      target,
      dodgeSuccess,
      blockedDamage: {
        type: sourceResult.rawDamage.type,
        damage: sourceResult.pierce ? 0 : damageResistances,
      },
      reflectedDamage,
      totalDamage,
      regeneratedHealth,
      willDie: target.health <= target.stats.healthOffset + totalDamage.damage,
    }
  } else {
    return {
      ...sourceResult,
      target,
      dodgeSuccess: false,
      reflectedDamage: sourceResult.rawDamage,
      blockedDamage: sourceResult.rawDamage,
      totalDamage: sourceResult.rawDamage,
      regeneratedHealth: noneg(
        sourceResult.source.stats.healthOffset -
          (sourceResult.source.stats.healthOffset +
            sourceResult.source.stats.healthRegen),
      ),
      willDie: false,
    }
  }
}

export const getPerfectKeys = (skill: SkillT): PerfectKeyT[] => {
  let base: PerfectKeyT[] = [
    ...skill.perfectStatus,
    ...skill.perfectTags.map((t) => t.type),
  ]
  if (skill.perfectSplash) base = [...base, 'splash']
  if (skill.perfectPierce) base = [...base, 'pierce']
  return base
}

export const getPerfectText = (
  skill: SkillT,
  character: ProcessedCharacterT,
): string => {
  const perfectKeys = getPerfectKeys(skill)
  const rawDamage = getSkillDamage(skill, character)
  const splashDamage = getSplashDamage(rawDamage)

  return perfectKeys.reduce((res, key, i) => {
    let pre = `${res}${i > 0 ? ',' : ''}`
    const text = PERFECT_DISPLAY_INFO[key]
    switch (key) {
      case 'splash':
        return `${pre} ${Math.floor(
          (splashDamage.damage / rawDamage.damage) * 100,
        )}% ${text}`
      default:
        return `${pre} ${text}`
    }
  }, '')
}

export const getSkillDamage = (
  skill: SkillT,
  source: ProcessedCharacterT,
  target?: ProcessedCharacterT,
): DamageT => {
  const rawDamage: DamageT = {
    type: source.weapon.damage.type,
    damage:
      (source.weapon.damage.damage + source.stats.damageOffset) *
      (1 + skill.damageModifier + source.stats.damageModifier / 100),
  }
  const damageResistances = target
    ? getDamageResistance(target, rawDamage.type)
    : 0
  return {
    type: rawDamage.type,
    damage: noneg(Math.round(rawDamage.damage - damageResistances)),
  }
}

export const getSkillDamageRange = (
  skill: SkillT,
  source: ProcessedCharacterT,
  targets?: ProcessedCharacterT[],
) => {
  let min: number | undefined = undefined
  let max: number | undefined = undefined
  if (!targets) return `${getSkillDamage(skill, source).damage}`
  targets.forEach((target) => {
    const damage = getSkillDamage(skill, source, target).damage
    if (max === undefined || damage > max) max = damage
    if (min === undefined || damage < min) min = damage
  })
  if (min === max) return `${max || 0}`
  return `${min}-${max}`
}

export const getSkillResults = (
  skill: SkillT,
  source: ProcessedCharacterT,
  targets: ProcessedCharacterT[],
): TargetSkillResultT[] => {
  const sourceResult = getSourceSkillResult(source, skill)
  return targets.map((target) => getTargetSkillResult(target, sourceResult))
}

export const getSkillTargetOptions = (
  source: ProcessedCharacterT,
  sourceParty: ProcessedPartyT,
  targetParty: ProcessedPartyT,
  skill: SkillT,
): ProcessedCharacterT[] | ProcessedPartyT[] => {
  switch (skill.targetType) {
    case 'single':
      return targetParty.characters.filter((c) => !c.dead)
    case 'ally':
      return sourceParty.characters.filter((c) => !c.dead)
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
