import { CharacterClassT, ArmorT } from '../types'
import { SIMPLE_IRON_SHIELD } from './armor/simple_iron_shield'
import { EXPLORERS_CLOAK } from './armor/explorers_cloak'
import { EXPLORERS_HAT } from './armor/explorers_hat'
import { FUR_ARMOR } from './armor/fur_armor'
import { ADVENTURE_BOOTS } from './armor/adventure_boots'
import { ADVENTURE_CLOAK } from './armor/adventure_cloak'
import { FUR_BOOTS } from './armor/fur_boots'

export const CLASS_STARTING_ARMOR: Record<CharacterClassT, ArmorT[]> = {
  blacksmith: [SIMPLE_IRON_SHIELD, FUR_ARMOR, FUR_BOOTS],
  hunter: [ADVENTURE_CLOAK, ADVENTURE_BOOTS],
  scholar: [EXPLORERS_CLOAK, EXPLORERS_HAT],
  bard: [],
  enemy: [],
}
