import { DiceRoll } from 'rpg-dice-roller'
import { ProcessedCharacterT, CheckResultT, CheckT, StatsT } from '../types'
import { getCharacterStat } from './Character'

export const makeCheck = (key: keyof StatsT, offset?: number): CheckT => ({
  key,
  offset,
})

export const resolveCheck = (
  character: ProcessedCharacterT,
  check: CheckT,
): CheckResultT => {
  const statValue = getCharacterStat(character, check)
  const roll = new DiceRoll('1d100')
  return {
    input: check,
    result: roll.total <= statValue,
    total: roll.total,
    averageTotal: roll.averageTotal,
    maxTotal: roll.maxTotal,
    minTotal: roll.minTotal,
    output: roll.output,
  }
}

export const getChecksProbability = (
  character: ProcessedCharacterT,
  checks: CheckT[],
): number => {
  const statValues = checks.map((check) => getCharacterStat(character, check))
  const result = statValues.reduce((p, c) => {
    return p * (c / 100)
  }, 1)
  return result
}

export const getPassedCount = (results: CheckResultT[]): number =>
  results.filter((r) => r.result).length

export const didAllPass = (results: CheckResultT[]): boolean =>
  results.every((r) => r.result)
