import { CharacterClassT, ArmorT } from '../types'
import { SIMPLE_IRON_SHIELD } from './armor/simple_iron_shield'

export const CLASS_STARTING_ARMOR: Record<CharacterClassT, ArmorT[]> = {
  blacksmith: [SIMPLE_IRON_SHIELD],
  hunter: [],
  scholar: [],
  bard: [],
  enemy: [],
}
