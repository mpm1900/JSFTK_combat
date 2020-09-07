import { tWeapon } from '../../type'
import { ARCHLUTE } from './archlute'
import { BARBAT } from './barbat'
import { SIMPLE_LUTE } from './simple_lute'

export const ALL_LUTES = (): tWeapon[] => [ARCHLUTE(), BARBAT(), SIMPLE_LUTE()]
