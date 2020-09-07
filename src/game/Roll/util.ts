import { tProcessedCharacter } from '../Character/type'
import { tBaseStats } from '../Stats/type'
import { getBaseStatValue } from '../Character/util'
import { DiceRoll } from 'rpg-dice-roller'

export const resolveCheck = (
  character: tProcessedCharacter,
  key: keyof tBaseStats,
  offset: number = 0,
): boolean => {
  const statValue = getBaseStatValue(character, key, offset)
  const roll = new DiceRoll('1d100')
  return roll.total <= statValue
}

export const getChecksProbability = (
  character: tProcessedCharacter,
  checks: { key: keyof tBaseStats; offset: number }[],
): number => {
  const statValues = checks.map(({ key, offset }) =>
    getBaseStatValue(character, key, offset),
  )
  const result = statValues.reduce((p, c) => {
    return p * (c / 100)
  }, 1)
  return result
}
