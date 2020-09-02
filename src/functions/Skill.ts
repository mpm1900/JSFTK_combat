import {
  ProcessedCharacterT,
  SourceSkillResultT,
  HasSkillsT,
  SkillT,
  DamageT,
  TargetSkillResultT,
  CharacterT,
  PartyT,
  SkillTargetT,
  ProcessedPartyT,
  TargetTypeT,
} from '../types'
import { resolveCheck, getPassedCount, didAllPass } from './Roll'
import {
  getDamageResistance,
  isCharacter,
  processCharacter,
  addMultipleStatus,
  decrementStatusDurations,
} from './Character'
import { updateCharacter, isParty } from './Party'

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
  const criticalHitResult = resolveCheck(source, {
    offset: source.stats.criticalChance,
  })
  const rollResults = skill.rolls.map((check) => resolveCheck(source, check))
  const passedCount = criticalHitResult.result
    ? skill.rolls.length
    : getPassedCount(rollResults)
  const perfect = criticalHitResult.result ? true : didAllPass(rollResults)
  const accuracySuccess =
    criticalHitResult.result ||
    perfect ||
    (skill.accuracy !== undefined &&
      resolveCheck(source, skill.accuracy).result)
  const rawDamage: DamageT = {
    damage:
      accuracySuccess && skill.damage
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
    pierce: (perfect && skill.perfectPierce) || criticalHitResult.result,
    splashDamage:
      skill.perfectSplash && perfect
        ? { type: rawDamage.type, damage: Math.floor(rawDamage.damage / 2) }
        : { type: rawDamage.type, damage: 0 },
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
    return {
      ...sourceResult,
      target,
      dodgeSuccess: sourceResult.criticalSuccess ? false : dodgeResult.result,
      blockedDamage: {
        type: sourceResult.rawDamage.type,
        damage: sourceResult.pierce ? 0 : damageResistances,
      },
      totalDamage: {
        type: sourceResult.rawDamage.type,
        damage: Math.round(sourceResult.rawDamage.damage - damageResistances),
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
  target?: ProcessedCharacterT,
): DamageT => {
  const rawDamage: DamageT = {
    type: source.weapon.damage.type,
    damage:
      source.weapon.damage.damage *
      (1 + skill.damageModifier + source.stats.damageModifier),
  }
  const damageResistances = target
    ? getDamageResistance(target, rawDamage.type)
    : 0
  return {
    type: rawDamage.type,
    damage: Math.round(rawDamage.damage - damageResistances),
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

interface CommitSkillResultsT {
  party: PartyT
  enemyParty: PartyT
}
export const commitSkillResults = (party: PartyT, enemyParty: PartyT) => (
  results: TargetSkillResultT[],
): CommitSkillResultsT => {
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
    if (
      result.skill.targetType === 'self' ||
      result.skill.targetType === 'ally' ||
      result.skill.targetType === 'party'
    ) {
      ;[sourceParty, targetParty] = [targetParty, sourceParty]
    }
    targetParty = localUpdate(targetParty, result.target.id, (c) => {
      console.log(result.addedTags)
      return addMultipleStatus(
        {
          ...c,
          stats: {
            ...c.stats,
            healthOffset: c.stats.healthOffset + result.totalDamage.damage,
          },
          tags: [...c.tags, ...result.addedTags],
        },
        result.addedStatus,
      )
    })

    if (result.splashDamage.damage > 0) {
      targetParty.characters
        .filter((c) => c.id !== result.target.id)
        .forEach((character) => {
          targetParty = localUpdate(targetParty, character.id, (c) => {
            const splashDamageResistance = getDamageResistance(
              processCharacter(character),
              result.splashDamage.type,
            )
            return {
              ...c,
              stats: {
                ...c.stats,
                healthOffset:
                  c.stats.healthOffset +
                  (result.splashDamage.damage - splashDamageResistance),
              },
            }
          })
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
  return {
    party: {
      ...party,
      characters: party.characters.map((c) => decrementStatusDurations(c)),
    },
    enemyParty: {
      ...enemyParty,
      characters: enemyParty.characters.map((c) => decrementStatusDurations(c)),
    },
  }
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
