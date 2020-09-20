import { DiceRoll } from 'rpg-dice-roller'
import { v4 } from 'uuid'
import { makeRandomEncounter } from '../game/Encounter/util'
import { noneg } from '../util'
import { EncounterArrayT, HexT } from './types'

export const ZERO_HEX = (): HexT => ({
  id: v4(),
  q: 0,
  r: 0,
  s: 0,
})

export const makeHex = (q: number, r: number, s: number): HexT => ({
  id: v4(),
  q,
  r,
  s,
})

export const MIN_HEX = (size: number): HexT => makeHex(0, size, size * -1)

export const isEqual = (a: HexT, b: HexT) => a.id === b.id
export const isValueEqual = (a: HexT, b: HexT) =>
  a.q === b.q && a.r === b.r && a.s === b.s

export const addHex = (a: HexT, b: HexT): HexT => ({
  ...a,
  q: a.q + b.q,
  r: a.r + b.r,
  s: a.s + b.s,
})

export const multHex = (a: HexT, m: number) => ({
  ...a,
  q: a.q * m,
  r: a.r * m,
  s: a.s * m,
})

export const getDepth = (hex: HexT, size: number): number => {
  // if (isValueEqual(hex, MIN_HEX(size))) return -1
  return noneg(size - hex.r - 1)
}

export const makeEncounterArray = (
  size: number,
  floor: number,
): EncounterArrayT => {
  const minQ = 0
  const maxQ = size
  const minR = 0
  const maxR = size
  let index = 0
  const shopIndex = new DiceRoll(`1d55`).total
  let result: EncounterArrayT = {}
  for (let q = minQ; q <= maxQ; q++) {
    result[q] = {}
    for (let r = maxR; r >= minR; r--) {
      const ri = maxR - r
      result[q][r] = {}
      if (q > ri) continue
      const s = q * -1 - r
      const d = getDepth(makeHex(q, r, s), size)
      const startHex = MIN_HEX(size)
      if (!(q === startHex.q && r === startHex.r && s === startHex.s)) {
        const e = makeRandomEncounter(
          d,
          size,
          floor,
          false,
          index === shopIndex,
        )
        result[q][r][s] = e
      }
      index++
    }
  }
  return result
}

export const isAdjacent = (current: HexT | undefined) => (
  hex: HexT,
): boolean => {
  const range = 1
  if (!current) return false
  if (hex.q === current.q && hex.r === current.r - range) {
    return true
  }
  if (hex.q === current.q && hex.r === current.r + range) {
    return true
  }
  if (hex.q === current.q - range && hex.r === current.r) {
    return true
  }
  if (hex.q === current.q - range && hex.r === current.r + range) {
    return true
  }
  if (hex.q === current.q + range && hex.r === current.r) {
    return true
  }
  if (hex.q === current.q + range && hex.r === current.r - range) {
    return true
  }
  return false
}
