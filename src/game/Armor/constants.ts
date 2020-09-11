import { tCharacterClass } from '../Character/type'
import { tArmor } from './type'
import { SIMPLE_IRON_SHIELD } from './objects/simple_iron_shield'

export const CLASS_ARMOR: Record<tCharacterClass, tArmor[]> = {
  blacksmith: [SIMPLE_IRON_SHIELD()],
  hunter: [],
  scholar: [],
  bard: [],
  hobo: [],
  enemy: [],
}
