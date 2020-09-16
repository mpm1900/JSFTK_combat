import { LICH } from '../../Character/bosses'
import { CULTIST_SCHOLAR } from '../../Character/enemies/cultist_scholar'
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

export const FloorConfig2 = (): tFloorConfig => ({
  bosses: [LICH()],
  items: [...FLOOR_2_WEAPONS().map((w) => w())],
  enemies: {
    0: [
      makeRandomFloorEncounter([TOMB_SPIRIT, TOMB_SPIDER], 2),
      makeRandomFloorEncounter([TOMB_SPIRIT, TOMB_SPIDER], 3),
    ],
    1: [
      makeRandomFloorEncounter([TOMB_SPIDER, TOMB_SPIRIT, CULTIST_SCHOLAR], 2),
      makeRandomFloorEncounter([TOMB_SPIDER, TOMB_SPIRIT, CULTIST_SCHOLAR], 3),
    ],
  },
})
