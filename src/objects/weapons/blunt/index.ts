import { WeaponT } from '../../../types'
import { MACE } from './mace'
import { WAR_PICK } from './war_pick'
import { CRUDE_CLUB } from './crude_club'

export const ALL_BLUNT = (): WeaponT[] => [MACE(), WAR_PICK(), CRUDE_CLUB()]
