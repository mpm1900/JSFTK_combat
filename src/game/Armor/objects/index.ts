import { ADVENTURE_BOOTS } from './adventure_boots'
import { ADVENTURE_CLOAK } from './adventure_cloak'
import { EXPLORERS_BOOTS } from './explorers_boots'
import { EXPLORERS_CLOAK } from './explorers_cloak'
import { EXPLORERS_HAT } from './explorers_hat'
import { FUR_ARMOR } from './fur_armor'
import { FUR_BOOTS } from './fur_boots'
import { PERFORMERS_BOOTS } from './performers_boots'
import { PERFORMERS_VEST } from './performers_vest'
import { SIMPLE_IRON_SHIELD } from './simple_iron_shield'
import { tArmor } from '../type'

export const ALL_ARMOR = (): tArmor[] => [
  ADVENTURE_BOOTS(),
  ADVENTURE_CLOAK(),

  EXPLORERS_BOOTS(),
  EXPLORERS_CLOAK(),
  EXPLORERS_HAT(),

  FUR_ARMOR(),
  FUR_BOOTS(),

  PERFORMERS_BOOTS(),
  PERFORMERS_VEST(),

  SIMPLE_IRON_SHIELD(),
]
