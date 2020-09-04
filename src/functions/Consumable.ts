import {
  ProcessedCharacterT,
  SourceSkillResultT,
  TargetSkillResultT,
} from '../types'
import { ConsumableT } from '../types/Consumable'
import { resolveCheck, getPassedCount, didAllPass } from './Roll'

/**
 * THESE AREE NOT BEING USED
 * @param source
 * @param consumable
 */

export const getSourceConsumableResult = (
  source: ProcessedCharacterT,
  consumable: ConsumableT,
): SourceSkillResultT => {
  const { skill } = consumable
  const rollResults = skill.rolls.map((check) => resolveCheck(source, check))
  const passedCount = getPassedCount(rollResults)
  const perfect = didAllPass(rollResults)

  return {
    rollResults,
    skill,
    source,
    accuracySuccess: true,
    criticalSuccess: false,
    passedCount,
    perfect,
    rawDamage: { damage: 0, type: 'magic' },
    pierce: false,
    splashDamage: { damage: 0, type: 'magic' },
    addedStatus: perfect ? skill.perfectStatus : [],
    healing:
      perfect && skill.healing ? source.stats.consumableHealthGainOffset : 0,
    consumableIndex: 0,
  }
}

export const getTargetConsumableResult = (
  target: ProcessedCharacterT,
  sourceResult: SourceSkillResultT,
): TargetSkillResultT => {
  return {
    ...sourceResult,
    target,
    dodgeSuccess: false,
    reflectedDamage: sourceResult.rawDamage,
    blockedDamage: sourceResult.rawDamage,
    totalDamage: sourceResult.rawDamage,
    regeneratedHealth: 0,
    willDie: false,
  }
}

export interface ConsumableStackT {
  consumable: ConsumableT
  count: number
}
export const considateConsumableListToStack = (
  consumables: ConsumableT[],
): ConsumableStackT[] => {
  let stack: ConsumableStackT[] = []
  const updateStackItem = (id: string) =>
    stack.map((s) =>
      s.consumable.id === id ? { ...s, count: s.count + 1 } : s,
    )
  const containsId = (id: string) =>
    stack.map((s) => s.consumable.id).includes(id)
  consumables.forEach((c) => {
    if (containsId(c.id)) {
      stack = updateStackItem(c.id)
    } else {
      stack = [...stack, { consumable: c, count: 1 }]
    }
  })
  return stack
}
