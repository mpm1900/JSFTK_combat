import { MACE } from './mace'
import { WAR_PICK } from './war_pick'
import { CRUDE_CLUB } from './crude_club'
import { tWeapon } from '../../type'
import { GLASS_HAMMER } from './glass_hammer'

export const ALL_BLUNT = (): tWeapon[] => [
  MACE(),
  WAR_PICK(),
  CRUDE_CLUB(),
  GLASS_HAMMER(),
]
