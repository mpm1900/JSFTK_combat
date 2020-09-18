import { ARMOR_BY_LEVEL } from '../../Armor/builders/sets'
import { CONSECRATED_BEAST } from '../../Character/bosses/consecrated_beast'
import { BANSHEE, FLAME_WISP } from '../../Character/enemies'
import { CULTIST_SCHOLAR } from '../../Character/enemies/cultist_scholar'
import { TOMB_GUARDIAN } from '../../Character/enemies/tomb_guardian'
import { TOMB_SPIDER } from '../../Character/enemies/tomb_spider'
import { TOMB_SPIRIT } from '../../Character/enemies/tomb_spirit'
import { WEAPONS_BY_LEVEL } from '../../Weapon/builders/objects'
import { tFloorConfig } from '../type'
import { makeRandomFloorEncounter } from './util'

const FLOOR_2_WEAPONS = () => [
  ...WEAPONS_BY_LEVEL[3],
  ...WEAPONS_BY_LEVEL[4],
  ...WEAPONS_BY_LEVEL[5],
]

const FLOOR_2_ARMOR = () => [...ARMOR_BY_LEVEL[3], ...ARMOR_BY_LEVEL[4]]

export const FloorConfig2 = (): tFloorConfig => ({
  bosses: [CONSECRATED_BEAST()],
  items: [
    ...FLOOR_2_WEAPONS().map((w) => w()),
    ...FLOOR_2_ARMOR().map((w) => w()),
  ],
  enemies: {
    0: [
      makeRandomFloorEncounter([TOMB_SPIRIT, TOMB_SPIDER], 2),
      makeRandomFloorEncounter([TOMB_SPIRIT, TOMB_SPIDER], 3),
    ],
    1: [
      makeRandomFloorEncounter([TOMB_SPIDER, TOMB_SPIRIT, CULTIST_SCHOLAR], 2),
      makeRandomFloorEncounter([TOMB_SPIDER, TOMB_SPIRIT, CULTIST_SCHOLAR], 3),
    ],
    2: [
      makeRandomFloorEncounter(
        [TOMB_SPIDER, TOMB_SPIRIT, CULTIST_SCHOLAR, FLAME_WISP, FLAME_WISP],
        3,
      ),
    ],
    3: [
      makeRandomFloorEncounter(
        [TOMB_SPIDER, TOMB_SPIRIT, CULTIST_SCHOLAR, FLAME_WISP, TOMB_GUARDIAN],
        3,
      ),
    ],
    4: [
      makeRandomFloorEncounter(
        [TOMB_SPIRIT, CULTIST_SCHOLAR, FLAME_WISP, TOMB_GUARDIAN],
        3,
      ),
    ],
    5: [
      makeRandomFloorEncounter(
        [CULTIST_SCHOLAR, FLAME_WISP, TOMB_GUARDIAN, BANSHEE],
        3,
      ),
    ],
  },
})
