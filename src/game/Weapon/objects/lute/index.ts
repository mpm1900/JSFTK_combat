import { tWeapon } from '../../type'
import { ARCHLUTE } from './archlute'
import { BARBAT } from './barbat'

export const ALL_LUTES = (): tWeapon[] => [ARCHLUTE(), BARBAT()]
