import { tCharacterClass } from '../Character/type'
import { BROKEN_SHIELD } from './builders/shields/level_0'
import {
  CorsairAttire,
  CorsairHat,
  CorsairShoes,
  DrifterHat,
  DrifterShirt,
  DrifterShoes,
  ExecutionerArmor,
  ExecutionerBoots,
  ExecutionerHelmet,
  MercenaryArmor,
  MercenaryBoots,
  MercenaryHelmet,
  PatricianAttire,
  PatricianHat,
  PatricianShoes,
  RangerBoots,
  RangerCloak,
  RangerHood,
  ReaperBoots,
  ReaperCloak,
  ReaperHood,
  StudentHat,
  StudentRobes,
  StudentShoes,
} from './builders/static'
import { MonkHood, MonkRobes, MonkShoes } from './builders/static/level0/monk'
import { tArmor } from './type'

export const CLASS_ARMOR: Record<tCharacterClass, tArmor[]> = {
  executioner: [ExecutionerHelmet, ExecutionerArmor, ExecutionerBoots],
  mercenary: [BROKEN_SHIELD(), MercenaryHelmet, MercenaryArmor, MercenaryBoots],
  ranger: [RangerHood, RangerCloak, RangerBoots],
  reaper: [ReaperHood, ReaperCloak, ReaperBoots],
  student: [StudentHat, StudentRobes, StudentShoes],
  patrician: [PatricianHat, PatricianAttire, PatricianShoes],
  corsair: [BROKEN_SHIELD(), CorsairHat, CorsairAttire, CorsairShoes],
  monk: [MonkHood, MonkRobes, MonkShoes],
  drifter: [DrifterHat, DrifterShirt, DrifterShoes],
  enemy: [],
}
