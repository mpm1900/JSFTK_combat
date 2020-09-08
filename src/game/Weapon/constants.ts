import { tCharacterClass } from '../Character/type'
import { tWeapon } from './type'
import { BLACKSMITHS_HAMMER } from './objects/blunt/blacksmiths_hammer'
import { HUNTING_BOW } from './objects/bow/hunting_bow'
import { SCHOLARS_BOOK } from './objects/tome/scholars_book'
import { SIMPLE_LUTE } from './objects/lute/simple_lute'
import { ALL_BLUNT } from './objects/blunt'
import { ALL_BOWS } from './objects/bow'
import { ALL_LUTES } from './objects/lute'
import { ALL_TOMES } from './objects/tome'

export const CLASS_WEAPONS: Record<tCharacterClass, tWeapon> = {
  blacksmith: BLACKSMITHS_HAMMER(),
  hunter: HUNTING_BOW(),
  scholar: SCHOLARS_BOOK(),
  bard: SIMPLE_LUTE(),
  enemy: BLACKSMITHS_HAMMER(),
}
export const ALL_WEAPONS = () => [
  ...ALL_BLUNT(),
  ...ALL_BOWS(),
  ...ALL_LUTES(),
  ...ALL_TOMES(),
]
