import { CharacterClassT, WeaponT } from '../types'
import { BLACKSMITHS_HAMMER } from './weapons/blunt/blacksmiths_hammer'
import { HUNTING_BOW } from './weapons/bow/hunting_bow'
import { SCHOLARS_BOOK } from './weapons/tome/scholars_book'
import { SIMPLE_LUTE } from './weapons/lute/simple_lute'

export const CLASS_STARTING_WEAPONS: Partial<Record<
  CharacterClassT,
  WeaponT
>> = {
  blacksmith: BLACKSMITHS_HAMMER(),
  hunter: HUNTING_BOW(),
  scholar: SCHOLARS_BOOK(),
  bard: SIMPLE_LUTE(),
}
