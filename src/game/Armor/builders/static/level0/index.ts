import { tArmor } from '../../../type'
import { DrifterHat, DrifterShirt, DrifterShoes } from './drifter'
import {
  ExecutionerArmor,
  ExecutionerBoots,
  ExecutionerHelmet,
} from './executioner'
import { PatricianAttire, PatricianHat, PatricianShoes } from './patrician'
import { RangerBoots, RangerCloak, RangerHood } from './ranger'
import { StudentHat, StudentRobes, StudentShoes } from './student'

export * from './drifter'
export * from './executioner'
export * from './patrician'
export * from './ranger'
export * from './student'

export const ARMOR_LEVEL_0: tArmor[] = [
  DrifterHat,
  DrifterShirt,
  DrifterShoes,
  ExecutionerHelmet,
  ExecutionerArmor,
  ExecutionerBoots,
  PatricianHat,
  PatricianAttire,
  PatricianShoes,
  RangerHood,
  RangerCloak,
  RangerBoots,
  StudentHat,
  StudentRobes,
  StudentShoes,
]
