import Stunned from './svg/lorc/star-swirl.svg'
import Targeted from './svg/sbed/targeted.svg'
import Evasive from './svg/lorc/dodging.svg'
import SpeedDown from './svg/delapouite/sticky-boot.svg'
import Poisoned from './svg/lorc/biohazard.svg'
import Burning from './svg/carl-olsen/flame.svg'
import Bleeding from './svg/lorc/bleeding-wound.svg'
import Frozen from './svg/lorc/snowflake-2.svg'
import ArmorDown from './svg/lorc/broken-shield.svg'
import ResistanceDown from './svg/lorc/broken-shield.svg'
import Cursed from './svg/lorc/pentagram-rose.svg'
import Protected from './svg/lorc/shieldcomb.svg'
import { tStatusType } from '../game/Status/type'

export const STATUS_ICONS: Partial<Record<tStatusType, string>> = {
  evasive: Evasive,
  stunned: Stunned,
  targeted: Targeted,
  protected: Protected,
  poisoned: Poisoned,
  burning: Burning,
  bleeding: Bleeding,
  frozen: Frozen,
  'speed-down': SpeedDown,
  'armor-down': ArmorDown,
  'resistance-down': ResistanceDown,
  'cursed-agility': Cursed,
  'cursed-charisma': Cursed,
  'cursed-dexterity': Cursed,
  'cursed-intelligence': Cursed,
  'cursed-luck': Cursed,
  'cursed-strength': Cursed,
  'cursed-vigor': Cursed,
}
