import { CharacterClassT, WeaponT } from '../types'
import { BLACKSMITHS_HAMMER } from './weapons/blacksmiths_hammer'
import { HUNTING_BOW } from './weapons/hunting_bow'
import { SCHOLARS_BOOK } from './weapons/scholars_book'

export const CLASS_STARTING_WEAPONS: Partial<Record<
  CharacterClassT,
  WeaponT
>> = {
  blacksmith: BLACKSMITHS_HAMMER,
  hunter: HUNTING_BOW,
  scholar: SCHOLARS_BOOK,
  bard: BLACKSMITHS_HAMMER,
}
