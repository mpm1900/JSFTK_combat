import { CharacterClassT, WeaponT } from '../types'
import { BLACKSMITHS_HAMMER } from './weapons/blacksmiths_hammer'

export const CLASS_STARTING_WEAPONS: Record<CharacterClassT, WeaponT> = {
  blacksmith: BLACKSMITHS_HAMMER,
  hunter: BLACKSMITHS_HAMMER,
  scholar: BLACKSMITHS_HAMMER,
  bard: BLACKSMITHS_HAMMER,
}
