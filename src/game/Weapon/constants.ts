import { tCharacterClass } from '../Character/type'
import { tWeapon } from './type'
import { BLACKSMITHS_HAMMER } from './objects/blunt/blacksmiths_hammer'
import { HUNTING_BOW } from './objects/bow/hunting_bow'
import { SCHOLARS_BOOK } from './objects/tome/scholars_book'
import { SIMPLE_LUTE } from './objects/lute/simple_lute'

export const CLASS_WEAPONS: Record<tCharacterClass, tWeapon> = {
  blacksmith: BLACKSMITHS_HAMMER(),
  hunter: HUNTING_BOW(),
  scholar: SCHOLARS_BOOK(),
  bard: SIMPLE_LUTE(),
  enemy: BLACKSMITHS_HAMMER(),
}
