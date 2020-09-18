import { tFloorConfig } from '../type'
import {
  FOREST_WOLF,
  FOREST_BEAST,
  FOREST_RAVEN,
  FOREST_SNAKE,
  CULTIST,
  FOREST_TROLL,
  CULTIST_BRUTE,
  FOREST_WITCH,
} from '../../Character/enemies'
import { LICH } from '../../Character/bosses'
import { WEAPONS_BY_LEVEL } from '../../Weapon/builders/objects'
import { ARMOR_BY_LEVEL } from '../../Armor/builders/sets'
import { makeRandomFloorEncounter } from './util'
import { TOMB_SPIRIT } from '../../Character/enemies/tomb_spirit'

const FLOOR_1_WEAPONS = () => [
  ...WEAPONS_BY_LEVEL[1],
  ...WEAPONS_BY_LEVEL[2],
  ...WEAPONS_BY_LEVEL[3],
]

const FLOOR_1_ARMOR = () => [
  ...ARMOR_BY_LEVEL[0],
  ...ARMOR_BY_LEVEL[1],
  ...ARMOR_BY_LEVEL[2],
]

export const FloorConfig1 = (): tFloorConfig => ({
  bosses: [LICH()],
  items: [
    ...FLOOR_1_WEAPONS().map((w) => w()),
    ...FLOOR_1_ARMOR().map((a) => a()),
  ],
  enemies: {
    0: [
      makeRandomFloorEncounter([FOREST_WOLF, FOREST_BEAST, FOREST_SNAKE], 1),
      makeRandomFloorEncounter([FOREST_WOLF, FOREST_BEAST, FOREST_WITCH], 1),
      makeRandomFloorEncounter([FOREST_WOLF, FOREST_BEAST, FOREST_WITCH], 2),
      makeRandomFloorEncounter([FOREST_WOLF, FOREST_BEAST, FOREST_WITCH], 1),
      makeRandomFloorEncounter([FOREST_WOLF, FOREST_BEAST, FOREST_WITCH], 2),
      makeRandomFloorEncounter([FOREST_WOLF, FOREST_BEAST, FOREST_SNAKE], 2),
      makeRandomFloorEncounter(
        [FOREST_WOLF, FOREST_WOLF, FOREST_BEAST, FOREST_WITCH, FOREST_SNAKE],
        3,
      ),
    ],
    1: [
      makeRandomFloorEncounter(
        [
          FOREST_WOLF,
          FOREST_BEAST,
          FOREST_WITCH,
          FOREST_SNAKE,
          FOREST_RAVEN,
          FOREST_RAVEN,
        ],
        3,
      ),
    ],
    2: [
      makeRandomFloorEncounter(
        [
          FOREST_BEAST,
          FOREST_WITCH,
          FOREST_SNAKE,
          FOREST_SNAKE,
          FOREST_SNAKE,
          FOREST_RAVEN,
          FOREST_RAVEN,
          FOREST_RAVEN,
        ],
        3,
      ),
      [CULTIST()],
      [CULTIST_BRUTE()],
      [FOREST_TROLL()],
    ],
    3: [
      makeRandomFloorEncounter(
        [
          FOREST_WITCH,
          FOREST_SNAKE,
          FOREST_SNAKE,
          FOREST_RAVEN,
          FOREST_RAVEN,
          FOREST_RAVEN,
          FOREST_TROLL,
        ],
        3,
      ),
      makeRandomFloorEncounter(
        [
          FOREST_WITCH,
          FOREST_SNAKE,
          FOREST_SNAKE,
          FOREST_RAVEN,
          FOREST_RAVEN,
          FOREST_RAVEN,
          FOREST_TROLL,
        ],
        3,
      ),
      makeRandomFloorEncounter(
        [
          FOREST_WITCH,
          FOREST_SNAKE,
          FOREST_SNAKE,
          FOREST_RAVEN,
          FOREST_RAVEN,
          FOREST_RAVEN,
          FOREST_TROLL,
        ],
        3,
      ),
      makeRandomFloorEncounter(
        [FOREST_RAVEN, FOREST_TROLL, CULTIST, CULTIST_BRUTE],
        2,
      ),
    ],
    4: [
      makeRandomFloorEncounter(
        [FOREST_RAVEN, FOREST_RAVEN, FOREST_WITCH, FOREST_WITCH, FOREST_TROLL],
        3,
      ),
      makeRandomFloorEncounter(
        [FOREST_RAVEN, FOREST_RAVEN, FOREST_WITCH, FOREST_WITCH, FOREST_TROLL],
        3,
      ),
      makeRandomFloorEncounter(
        [FOREST_RAVEN, FOREST_RAVEN, FOREST_WITCH, FOREST_WITCH, FOREST_TROLL],
        3,
      ),
      makeRandomFloorEncounter(
        [
          FOREST_RAVEN,
          FOREST_RAVEN,
          FOREST_WITCH,
          FOREST_WITCH,
          FOREST_TROLL,
          CULTIST,
          CULTIST_BRUTE,
        ],
        3,
      ),
    ],
    5: [
      makeRandomFloorEncounter(
        [FOREST_RAVEN, FOREST_WITCH, FOREST_TROLL, CULTIST, CULTIST_BRUTE],
        3,
      ),
      makeRandomFloorEncounter(
        [FOREST_RAVEN, FOREST_WITCH, FOREST_TROLL, CULTIST, CULTIST_BRUTE],
        3,
      ),
      makeRandomFloorEncounter(
        [FOREST_RAVEN, FOREST_WITCH, FOREST_TROLL, CULTIST, CULTIST_BRUTE],
        3,
      ),
      makeRandomFloorEncounter(
        [FOREST_RAVEN, FOREST_WITCH, FOREST_TROLL, CULTIST, CULTIST_BRUTE],
        3,
      ),
      [TOMB_SPIRIT()],
    ],
    6: [
      makeRandomFloorEncounter(
        [FOREST_WITCH, FOREST_TROLL, CULTIST, CULTIST_BRUTE],
        3,
      ),
    ],
    7: [
      makeRandomFloorEncounter(
        [FOREST_WITCH, FOREST_TROLL, CULTIST, CULTIST_BRUTE],
        3,
      ),
    ],
    8: [[TOMB_SPIRIT(), TOMB_SPIRIT()]],
  },
})
