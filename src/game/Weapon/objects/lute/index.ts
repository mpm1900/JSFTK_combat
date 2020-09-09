import { tWeapon } from '../../type'
import { ARCHLUTE } from './archlute'
import { BARBAT } from './barbat'
import { DECENT_LUTE } from './decent_lute'
import { FANCY_LUTE } from './fancy_lute'

export const ALL_LUTES = (): tWeapon[] => [
  ARCHLUTE(),
  BARBAT(),
  DECENT_LUTE(),
  FANCY_LUTE(),
]
