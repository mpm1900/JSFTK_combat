import { tWeapon } from '../../type'
import { ARCHLUTE } from './archlute'
import { BARBAT } from './barbat'
import { DECENT_LUTE } from './decent_lute'
import { FANCY_LUTE } from './fancy_lute'
import { GLASS_LUTE } from './glass_lute'

export * from './archlute'
export * from './barbat'
export * from './decent_lute'
export * from './fancy_lute'
export * from './simple_lute'

export const ALL_LUTES = (): tWeapon[] => [
  ARCHLUTE(),
  BARBAT(),
  DECENT_LUTE(),
  FANCY_LUTE(),
  GLASS_LUTE(),
]
