import { tFloorConfig } from '../type'
import {
  TIMBERWOLF,
  FOREST_BEAST,
  FOREST_RAVEN,
  BEE,
  CULTIST,
  BANDIT,
  CULTIST_BRUTE,
} from '../../Character/enemies'
import { LICH } from '../../Character/bosses'
import { WEAPONS } from '../../Weapon/builders/objects'
import { ARMOR_BY_LEVEL } from '../../Armor/builders/sets'

const FLOOR_1_WEAPONS = () => [
  ...WEAPONS[1],
  ...WEAPONS[2],
  ...WEAPONS[3],
  ...WEAPONS[4],
  ...WEAPONS[5],
]

const FLOOR_1_ARMOR = () => [
  ...ARMOR_BY_LEVEL[0],
  ...ARMOR_BY_LEVEL[1],
  ...ARMOR_BY_LEVEL[2],
]

export const FloorConfig1: tFloorConfig = {
  bosses: [LICH()],
  items: [
    ...FLOOR_1_WEAPONS().map((w) => w()),
    ...FLOOR_1_ARMOR().map((a) => a()),
  ],
  enemies: {
    0: [
      [TIMBERWOLF(), TIMBERWOLF(), TIMBERWOLF()],
      [TIMBERWOLF(), FOREST_BEAST()],
      [FOREST_BEAST(), FOREST_BEAST()],
      [FOREST_RAVEN(), TIMBERWOLF()],
      [FOREST_RAVEN()],
      [BEE()],
      [BEE(), FOREST_BEAST()],
      [BEE(), TIMBERWOLF()],
      [CULTIST()],
    ],
    1: [
      [FOREST_RAVEN(), TIMBERWOLF(), FOREST_BEAST()],
      [FOREST_BEAST(), FOREST_BEAST(), FOREST_BEAST()],
      [BEE(), BEE(), BEE()],
      [FOREST_RAVEN(), BEE(), FOREST_BEAST()],
      [CULTIST()],
    ],
    2: [
      [BEE(), BEE(), BEE()],
      [FOREST_RAVEN(), BEE(), BEE()],
      [FOREST_RAVEN(), FOREST_RAVEN(), FOREST_RAVEN()],
      [BANDIT(), TIMBERWOLF()],
      [BANDIT(), TIMBERWOLF(), TIMBERWOLF()],
      [CULTIST()],
    ],
    3: [
      [CULTIST(), CULTIST()],
      [CULTIST(), BANDIT()],
      [BANDIT(), BANDIT()],
      [CULTIST_BRUTE()],
      [BANDIT(), BEE(), BEE()],
      [CULTIST(), BEE(), BEE()],
      [CULTIST(), BANDIT(), BEE()],
      [BANDIT(), FOREST_RAVEN(), FOREST_RAVEN()],
      [CULTIST(), CULTIST(), FOREST_RAVEN()],
      [FOREST_RAVEN(), CULTIST(), FOREST_RAVEN()],
      [BANDIT(), FOREST_RAVEN(), BEE()],
      [CULTIST_BRUTE(), FOREST_RAVEN()],
    ],
    4: [
      [CULTIST(), BANDIT(), FOREST_RAVEN()],
      [CULTIST(), CULTIST(), BEE()],
      [CULTIST(), FOREST_RAVEN(), CULTIST()],
      [CULTIST(), CULTIST(), CULTIST()],
      [BANDIT(), BANDIT(), FOREST_RAVEN()],
      [BANDIT(), BANDIT(), BEE()],
      [BANDIT(), BANDIT(), BANDIT()],
      [CULTIST_BRUTE(), CULTIST_BRUTE()],
      [CULTIST_BRUTE(), FOREST_RAVEN(), FOREST_RAVEN()],
    ],
    5: [
      [BANDIT(), BANDIT(), BANDIT()],
      [BANDIT(), FOREST_RAVEN(), CULTIST_BRUTE()],
      [CULTIST_BRUTE(), FOREST_RAVEN(), FOREST_RAVEN()],
      [CULTIST_BRUTE(), CULTIST_BRUTE(), BANDIT()],
      [CULTIST(), CULTIST(), CULTIST()],
      [CULTIST_BRUTE(), CULTIST_BRUTE(), CULTIST_BRUTE()],
    ],
  },
}
