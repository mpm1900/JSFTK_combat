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
import { BANDIT_GLAIVE } from './objects/spear/bandit_glaive'
import { BOKKEN } from './objects/sword/bokken'
import { WOODCUTTERS_AXE } from './objects/axe/woodcutters_axe'
import { HOBO_DAGGER } from './objects/dagger/hobo_dagger'
import { MAGES_TOME } from './objects/tome/mages_tome'

export const CLASS_WEAPONS: Record<tCharacterClass, tWeapon> = {
  blacksmith: BLACKSMITHS_HAMMER(),
  hunter: HUNTING_BOW(),
  scholar: MAGES_TOME(), // SCHOLARS_BOOK(),
  bard: SIMPLE_LUTE(),
  hobo: HOBO_DAGGER(),
  enemy: BLACKSMITHS_HAMMER(),
}
export const ALL_WEAPONS = () => [
  ...ALL_BLUNT(),
  ...ALL_BOWS(),
  ...ALL_LUTES(),
  ...ALL_TOMES(),

  BANDIT_GLAIVE(),
  BOKKEN(),
  WOODCUTTERS_AXE(),
]
