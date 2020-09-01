import {
  ProcessedCharacterT,
  SourceSkillResultT,
  HasSkillsT,
  SkillT,
  DamageT,
  TargetSkillResultT,
  CharacterT,
  PartyT,
} from '../types'
import { resolveCheck, getPassedCount, didAllPass } from './Roll'
import { getDamageResistance, addMultipleStatus } from './Character'
import { updateCharacter } from './Party'

export const getSkillsFromObjects = (parents: HasSkillsT[]) => {
  return parents.reduce((p, c) => {
    return [...p, ...c.skills]
  }, [] as SkillT[])
}

export const getSourceSkillResult = (
  source: ProcessedCharacterT,
  skill: SkillT,
): SourceSkillResultT => {
  const criticalHitResult = resolveCheck(source, {
    offset: source.stats.criticalChance,
  })
  const accuracyResult = resolveCheck(source, skill.accuracy)
  const rollResults = skill.rolls.map((check) => resolveCheck(source, check))
  const passedCount = criticalHitResult.result
    ? skill.rolls.length
    : getPassedCount(rollResults)
  const perfect = criticalHitResult.result ? true : didAllPass(rollResults)
  const accuracySuccess =
    criticalHitResult.result || perfect || accuracyResult.result
  const rawDamage: DamageT = {
    damage: accuracySuccess
      ? source.weapon.damage.damage *
        (1 + skill.damageModifier + source.stats.damageModifier)
      : 0,
    type: source.weapon.damage.type,
  }
  return {
    rollResults,
    skill,
    source,
    accuracySuccess,
    criticalSuccess: criticalHitResult.result,
    passedCount,
    perfect,
    rawDamage,
    splashDamage:
      skill.perfectSplash && perfect
        ? { type: rawDamage.type, damage: Math.floor(rawDamage.damage / 2) }
        : { type: rawDamage.type, damage: 0 },
    addedStatus: perfect ? skill.perfectStatus : [],
  }
}

export const getTargetSkillResult = (
  target: ProcessedCharacterT,
  sourceResult: SourceSkillResultT,
): TargetSkillResultT => {
  if (sourceResult.accuracySuccess) {
    const dodgeResult = resolveCheck(target, { key: 'evasion' })
    const damageResistances = sourceResult.criticalSuccess
      ? 0
      : getDamageResistance(target, sourceResult.rawDamage.type)
    return {
      ...sourceResult,
      target,
      dodgeSuccess: sourceResult.criticalSuccess ? false : dodgeResult.result,
      blockedDamage: {
        type: sourceResult.rawDamage.type,
        damage: damageResistances,
      },
      totalDamage: {
        type: sourceResult.rawDamage.type,
        damage: sourceResult.rawDamage.damage - damageResistances,
      },
    }
  } else {
    return {
      ...sourceResult,
      target,
      dodgeSuccess: false,
      blockedDamage: sourceResult.rawDamage,
      totalDamage: sourceResult.rawDamage,
    }
  }
}

export const getSkillDamage = (
  skill: SkillT,
  source: ProcessedCharacterT,
  target: ProcessedCharacterT,
): DamageT => {
  const rawDamage: DamageT = {
    type: source.weapon.damage.type,
    damage:
      source.weapon.damage.damage *
      (1 + skill.damageModifier + source.stats.damageModifier),
  }
  const damageResistances = getDamageResistance(target, rawDamage.type)
  return {
    type: rawDamage.type,
    damage: rawDamage.damage - damageResistances,
  }
}

export const getSkillResults = (
  skill: SkillT,
  source: ProcessedCharacterT,
  targets: ProcessedCharacterT[],
): TargetSkillResultT[] => {
  const sourceResult = getSourceSkillResult(source, skill)
  return targets.map((target) => getTargetSkillResult(target, sourceResult))
}

export const commitSkillResults = (party: PartyT, enemyParty: PartyT) => (
  results: TargetSkillResultT[],
) => {
  const localUpdate = (
    p: PartyT,
    id: string,
    updater: (c: CharacterT) => CharacterT,
  ) => {
    return updateCharacter(p, id, updater)
  }
  results.forEach((result) => {
    const { source, target } = result
    let sourceParty = party.id === source.partyId ? party : enemyParty
    let targetParty = party.id === source.partyId ? enemyParty : party
    targetParty = localUpdate(targetParty, result.target.id, (c) => {
      return {
        ...c,
        stats: {
          ...c.stats,
          healthOffset: c.stats.healthOffset + result.totalDamage.damage,
        },
      }
    })

    if (result.splashDamage.damage > 0) {
      targetParty.characters
        .filter((c) => c.id !== result.target.id)
        .forEach((character) => {
          targetParty = localUpdate(targetParty, character.id, (c) => ({
            ...c,
            stats: {
              ...c.stats,
              healthOffset: c.stats.healthOffset + result.splashDamage.damage,
            },
          }))
        })
    }
    if (sourceParty.id === party.id) {
      party = sourceParty
      enemyParty = targetParty
    } else {
      party = targetParty
      enemyParty = sourceParty
    }
  })
  return { party, enemyParty }
}
