import { MACE } from './mace'
import { WAR_PICK } from './war_pick'
import { CRUDE_CLUB } from './crude_club'
import { tWeapon } from '../../type'
import { GLASS_HAMMER } from './glass_hammer'

export * from './blacksmiths_hammer'
export * from './crude_club'
export * from './glass_hammer'
export * from './mace'
export * from './war_pick'

export const ALL_BLUNT = (): tWeapon[] => [
  MACE(),
  WAR_PICK(),
  CRUDE_CLUB(),
  GLASS_HAMMER(),
]
