import { MACE } from './mace'
import { WAR_PICK } from './war_pick'
import { CRUDE_CLUB } from './crude_club'
import { tWeapon } from '../../type'

export const ALL_BLUNT = (): tWeapon[] => [MACE(), WAR_PICK(), CRUDE_CLUB()]
