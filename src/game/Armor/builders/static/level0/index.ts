import { tArmor } from '../../../type'
import { CorsairAttire, CorsairHat, CorsairShoes } from './corsair'
import { DrifterHat, DrifterShirt, DrifterShoes } from './drifter'
import {
  ExecutionerArmor,
  ExecutionerBoots,
  ExecutionerHelmet,
} from './executioner'
import { MercenaryArmor, MercenaryBoots, MercenaryHelmet } from './mercenary'
import { PatricianAttire, PatricianHat, PatricianShoes } from './patrician'
import { RangerBoots, RangerCloak, RangerHood } from './ranger'
import { ReaperBoots, ReaperCloak, ReaperHood } from './reaper'
import { StudentHat, StudentRobes, StudentShoes } from './student'

export * from './corsair'
export * from './drifter'
export * from './executioner'
export * from './mercenary'
export * from './patrician'
export * from './ranger'
export * from './reaper'
export * from './student'

export const ARMOR_LEVEL_0: tArmor[] = [
  CorsairHat,
  CorsairAttire,
  CorsairShoes,
  DrifterHat,
  DrifterShirt,
  DrifterShoes,
  ExecutionerHelmet,
  ExecutionerArmor,
  ExecutionerBoots,
  MercenaryHelmet,
  MercenaryArmor,
  MercenaryBoots,
  PatricianHat,
  PatricianAttire,
  PatricianShoes,
  RangerHood,
  RangerCloak,
  RangerBoots,
  ReaperHood,
  ReaperCloak,
  ReaperBoots,
  StudentHat,
  StudentRobes,
  StudentShoes,
]
