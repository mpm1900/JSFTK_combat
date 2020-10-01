import {
  FOREST_PENDANT,
  IRON_CHARM,
  MINOR_AGILITY_CHARM,
  MINOR_DAMAGE_CHARM,
  MINOR_STRENGTH_CHARM,
  RANGER_CHARM,
} from './pendants'
import {
  DRAINED_RING,
  LUCKY_RING,
  MINOR_HEALTH_RING,
  MINOR_MAGIC_RING,
  MINOR_REGEN_RING,
  RING_OF_FOCUS,
  SILVER_RING,
  SIMPLE_RING,
} from './rings'
import {
  BROKEN_SHIELD,
  FOREST_BUCKLER,
  LEATHER_BUCKLER,
  STUDENT_WARD,
  VILLAGER_SHIELD,
  WOODEN_WAR_SHIELD,
} from './shields/level_0'
import {
  APPRENTICE_WARD,
  CULTIST_SHIELD,
  IRON_BUCKLER,
  IRON_WAR_SHIELD,
  WOODEN_BUCKLER,
  WOODEN_PLANK_SHIELD,
} from './shields/level_1'
import {
  CULTIST_WARD,
  GRAVEGUARD_SHIELD,
  HEAVY_IRON_SHIELD,
  NOVICE_WARD,
  OLD_FOREST_SHIELD,
} from './shields/level_2'

export const PENDANTS_BY_LEVEL = {
  0: [RANGER_CHARM, MINOR_STRENGTH_CHARM, MINOR_AGILITY_CHARM, IRON_CHARM],
  1: [FOREST_PENDANT, MINOR_DAMAGE_CHARM],
}
export const RINGS_BY_LEVEL = {
  0: [LUCKY_RING, DRAINED_RING, SIMPLE_RING],
  1: [
    RING_OF_FOCUS,
    MINOR_HEALTH_RING,
    MINOR_REGEN_RING,
    MINOR_MAGIC_RING,
    SILVER_RING,
  ],
}
export const SHIELDS_BY_LEVEL = {
  0: [
    FOREST_BUCKLER,
    STUDENT_WARD,
    VILLAGER_SHIELD,
    WOODEN_WAR_SHIELD,
    LEATHER_BUCKLER,
  ],
  1: [
    WOODEN_PLANK_SHIELD,
    CULTIST_SHIELD,
    WOODEN_BUCKLER,
    IRON_BUCKLER,
    APPRENTICE_WARD,
    IRON_WAR_SHIELD,
  ],
  2: [
    GRAVEGUARD_SHIELD,
    OLD_FOREST_SHIELD,
    HEAVY_IRON_SHIELD,
    NOVICE_WARD,
    CULTIST_WARD,
  ],
}
