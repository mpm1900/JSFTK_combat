import { tCharacterClass } from '../Character/type'
import {
  ANTIQUATED_ATTIRE,
  ANTIQUATED_HAT,
  ANTIQUATED_SHOES,
} from './builders/sets/antiquated'
import { BONE_ARMOR, BONE_BOOTS, BONE_HELMET } from './builders/sets/bone'
import { HUNTER_BOOTS, HUNTER_CLOAK, HUNTER_HOOD } from './builders/sets/hunter'
import { NOVICE_HAT, NOVICE_ROBES, NOVICE_SHOES } from './builders/sets/novice'
import { tArmor } from './type'

export const CLASS_ARMOR: Record<tCharacterClass, tArmor[]> = {
  /*
  executioner: [BONE_HELMET(), BONE_ARMOR(), BONE_BOOTS()],
  ranger: [HUNTER_HOOD(), HUNTER_CLOAK(), HUNTER_BOOTS()],
  reaper: [HUNTER_HOOD(), HUNTER_CLOAK(), HUNTER_BOOTS()],
  student: [NOVICE_HAT(), NOVICE_ROBES(), NOVICE_SHOES()],
  patrician: [ANTIQUATED_HAT(), ANTIQUATED_ATTIRE(), ANTIQUATED_SHOES()],
  */
  executioner: [],
  ranger: [],
  reaper: [],
  student: [],
  patrician: [],
  drifter: [],
  enemy: [],
}
