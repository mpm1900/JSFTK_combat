import { ADVENTURE_BOOTS } from './footwear/adventure_boots'
import { ADVENTURE_CLOAK } from './magic-armor/adventure_cloak'
import { EXPLORERS_BOOTS } from './footwear/explorers_boots'
import { EXPLORERS_CLOAK } from './magic-armor/explorers_cloak'
import { EXPLORERS_HAT } from './hats/explorers_hat'
import { FUR_ARMOR } from './cloth-armor/fur_armor'
import { FUR_BOOTS } from './footwear/fur_boots'
import { PERFORMERS_BOOTS } from './footwear/performers_boots'
import { PERFORMERS_VEST } from './cloth-armor/performers_vest'
import { tArmor } from '../type'
import { WOODEN_HEATER } from './shields/wooden_heater'
import { WARD_SHIELD } from './magic-shields/ward_shield'
import { TOWN_GUARD_HELM } from './hats/town_guard_helm'
import { TOWN_GUARD_ARMOR } from './cloth-armor/town_guard_armor'
import { TOWN_GUARD_BOOTS } from './footwear/town_guard_boots'
import { BONE_BUCKLER } from './shields/bone_buckler'
import { APPRENTICE_CAP } from './magic-hats/apprentice_cap'
import { APRRENTICE_ROBE } from './magic-armor/apprentice_robe'
import { APPRENTICE_SHOES } from './footwear/apprentice_shoes'
import { CLOTH_SHOES } from './footwear/cloth_shoes'
import { FANCY_HAT } from './hats/fancy_hat'
import { FANCY_SHOES } from './footwear/fancy_shoes'
import { FANCY_VEST } from './cloth-armor/fancy_vest'
import { LEATHER_GREAVES } from './footwear/leather_greaves'
import { LEATHER_ARMOR } from './cloth-armor/leather_armor'
import { CHAIN_MAIL_VEST } from './armor/chain_mail_vest'
import { LEATHER_VEST } from './cloth-armor/leather_vest'
import { IRON_ROUND_SHIELD } from './shields/iron_round_shield'
import { GOBLIN_HELM } from './helmets/goblin_helm'
import { GOBLIN_VEST } from './armor/goblin_vest'
import { TRAVELLERS_BOOTS } from './footwear/travellers_boots'
import { TRAVELLERS_HAT } from './hats/travellers_hat'
import { TRAVELLERS_TUNIC } from './magic-armor/travellers_tunic'

export const ALL_FLOOR_1_ARMOR = (): tArmor[] => [
  ADVENTURE_BOOTS(),
  ADVENTURE_CLOAK(),

  EXPLORERS_BOOTS(),
  EXPLORERS_CLOAK(),
  EXPLORERS_HAT(),

  FUR_ARMOR(),
  FUR_BOOTS(),

  PERFORMERS_BOOTS(),
  PERFORMERS_VEST(),

  TOWN_GUARD_HELM(),
  TOWN_GUARD_ARMOR(),
  TOWN_GUARD_BOOTS(),

  APPRENTICE_CAP(),
  APRRENTICE_ROBE(),
  APPRENTICE_SHOES(),

  FANCY_HAT(),
  FANCY_SHOES(),
  FANCY_VEST(),

  CLOTH_SHOES(),
  CHAIN_MAIL_VEST(),

  LEATHER_GREAVES(),
  LEATHER_ARMOR(),
  LEATHER_VEST(),

  TRAVELLERS_BOOTS(),
  TRAVELLERS_HAT(),
  TRAVELLERS_TUNIC(),

  GOBLIN_HELM(),
  GOBLIN_VEST(),

  BONE_BUCKLER(),
  WARD_SHIELD(),
  WOODEN_HEATER(),
  IRON_ROUND_SHIELD(),
]
