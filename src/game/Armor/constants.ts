import { tCharacterClass } from '../Character/type'
import {
  DrifterHat,
  DrifterShirt,
  DrifterShoes,
  ExecutionerArmor,
  ExecutionerBoots,
  ExecutionerHelmet,
  PatricianAttire,
  PatricianHat,
  PatricianShoes,
  RangerBoots,
  RangerCloak,
  RangerHood,
  StudentHat,
  StudentRobes,
  StudentShoes,
} from './builders/static'
import { tArmor } from './type'

export const CLASS_ARMOR: Record<tCharacterClass, tArmor[]> = {
  executioner: [ExecutionerHelmet, ExecutionerArmor, ExecutionerBoots],
  ranger: [RangerHood, RangerCloak, RangerBoots],
  reaper: [RangerHood, RangerCloak, RangerBoots],
  student: [StudentHat, StudentRobes, StudentShoes],
  patrician: [PatricianHat, PatricianAttire, PatricianShoes],
  drifter: [DrifterHat, DrifterShirt, DrifterShoes],
  enemy: [],
}
