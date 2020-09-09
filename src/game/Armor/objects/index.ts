import { ADVENTURE_BOOTS } from './adventure_boots'
import { ADVENTURE_CLOAK } from './adventure_cloak'
import { EXPLORERS_BOOTS } from './explorers_boots'
import { EXPLORERS_CLOAK } from './explorers_cloak'
import { EXPLORERS_HAT } from './explorers_hat'
import { FUR_ARMOR } from './fur_armor'
import { FUR_BOOTS } from './fur_boots'
import { PERFORMERS_BOOTS } from './performers_boots'
import { PERFORMERS_VEST } from './performers_vest'
import { tArmor } from '../type'
import { WOODEN_HEATER } from './wooden_heater'
import { WARD_SHIELD } from './ward_shield'
import { TOWN_GUARD_HELM } from './town_guard_helm'
import { TOWN_GUARD_ARMOR } from './town_guard_armor'
import { TOWN_GUARD_BOOTS } from './town_guard_boots'
import { BONE_BUCKLER } from './bone_buckler'
import { APPRENTICE_CAP } from './apprentice_cap'
import { APRRENTICE_ROBE } from './apprentice_robe'
import { APPRENTICE_SHOES } from './apprentice_shoes'
import { CLOTH_SHOES } from './cloth_shoes'
import { FANCY_HAT } from './fancy_hat'
import { FANCY_SHOES } from './fancy_shoes'
import { FANCY_VEST } from './fancy_vest'
import { LEATHER_GREAVES } from './leather_greaves'
import { LEATHER_ARMOR } from './leather_armor'
import { CHAIN_MAIL_VEST } from './chain_mail_vest'
import { LEATHER_VEST } from './leather_vest'
import { IRON_ROUND_SHIELD } from './iron_round_shield'
import { GOBLIN_HELM } from './goblin_helm'
import { GOBLIN_VEST } from './goblin_vest'
import { TRAVELLERS_BOOTS } from './travellers_boots'
import { TRAVELLERS_HAT } from './travellers_hat'
import { TRAVELLERS_TUNIC } from './travellers_tunic'

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
