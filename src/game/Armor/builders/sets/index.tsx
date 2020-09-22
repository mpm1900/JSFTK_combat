import { tArmor } from '../../type'
import {
  PENDANTS_BY_LEVEL,
  RINGS_BY_LEVEL,
  SHIELDS_BY_LEVEL,
} from '../constants'

export const ARMOR_BY_LEVEL: Record<number, (() => tArmor)[]> = {
  0: [...RINGS_BY_LEVEL[0], ...PENDANTS_BY_LEVEL[0], ...SHIELDS_BY_LEVEL[0]],
  1: [...SHIELDS_BY_LEVEL[1]],
  2: [...SHIELDS_BY_LEVEL[2]],
  3: [],
  4: [],
}

export const ALL_ARMOR = () =>
  Object.keys(ARMOR_BY_LEVEL).reduce((result, key) => {
    return [...result, ...ARMOR_BY_LEVEL[parseInt(key)]]
  }, [] as (() => tArmor)[])
