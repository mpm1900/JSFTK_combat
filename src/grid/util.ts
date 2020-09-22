import { v4 } from 'uuid'
import { buildRandomEncounter } from '../game/Encounter/builders'
import { noneg } from '../util'
import { makeRandom } from '../util/makeRandom'
import { EncounterArrayT, HexT } from './types'

export const makeHex = (q: number, r: number): HexT => ({
  id: v4(),
  q,
  r,
  s: q * -1 - r,
})

export const ZERO_HEX = (): HexT => makeHex(0, 0)
export const MIN_HEX = (size: number): HexT => makeHex(0, size)
export const CENTER_HEX = (size: number): HexT => {
  const q = Math.ceil(size / 2) - 2
  const r = Math.ceil(size / 2) - 1
  return makeHex(q, r)
}

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
  return noneg(size - hex.r - 1)
}

export const makeEncounterArray = (
  size: number,
  floorId: string,
): EncounterArrayT => {
  let index = 0
  const minQ = 0
  const maxQ = size
  const minR = 0
  const maxR = size
  const shopIndex = makeRandom(55, 1)
  let result: EncounterArrayT = {}
  for (let q = minQ; q <= maxQ; q++) {
    result[q] = {}
    for (let r = maxR; r >= minR; r--) {
      const hex = makeHex(q, r)
      const ri = maxR - r
      result[q][r] = {}
      if (q > ri) continue
      const e = buildRandomEncounter(floorId, hex, index === shopIndex)
      result[q][r][hex.s] = e
      index++
    }
  }
  return result
}

export const HEX_DIRECTIONS: HexT[] = [
  makeHex(1, 0),
  makeHex(1, -1),
  makeHex(0, -1),
  makeHex(-1, 0),
  makeHex(-1, 1),
  makeHex(0, 1),
]
export const isAdjacent = (current: HexT | undefined) => (
  hex: HexT,
): boolean => {
  if (!current) return false
  return HEX_DIRECTIONS.some((dir) => {
    const h = addHex(hex, dir)
    return isValueEqual(h, current)
  })
}

export const getAdjacent = (hex: HexT): HexT[] =>
  HEX_DIRECTIONS.map((dir) => addHex(hex, dir))
