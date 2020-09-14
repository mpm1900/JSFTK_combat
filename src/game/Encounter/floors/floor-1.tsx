import { tFloorConfig } from '../type'
import {
  TIMBERWOLF,
  BEASTMAN,
  VALE_IMP,
  BEE,
  CULTIST,
  BANDIT,
  BUCCANEER,
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
      [TIMBERWOLF(), BEASTMAN()],
      [BEASTMAN(), BEASTMAN()],
      [VALE_IMP(), TIMBERWOLF()],
      [VALE_IMP()],
      [BEE()],
      [BEE(), BEASTMAN()],
      [BEE(), TIMBERWOLF()],
      [CULTIST()],
    ],
    1: [
      [VALE_IMP(), TIMBERWOLF(), BEASTMAN()],
      [BEASTMAN(), BEASTMAN(), BEASTMAN()],
      [BEE(), BEE(), BEE()],
      [VALE_IMP(), BEE(), BEASTMAN()],
      [CULTIST()],
    ],
    2: [
      [BEE(), BEE(), BEE()],
      [VALE_IMP(), BEE(), BEE()],
      [VALE_IMP(), VALE_IMP(), VALE_IMP()],
      [BANDIT(), TIMBERWOLF()],
      [BANDIT(), TIMBERWOLF(), TIMBERWOLF()],
      [CULTIST()],
    ],
    3: [
      [CULTIST(), CULTIST()],
      [CULTIST(), BANDIT()],
      [BANDIT(), BANDIT()],
      [BUCCANEER()],
      [BANDIT(), BEE(), BEE()],
      [CULTIST(), BEE(), BEE()],
      [CULTIST(), BANDIT(), BEE()],
      [BANDIT(), VALE_IMP(), VALE_IMP()],
      [CULTIST(), CULTIST(), VALE_IMP()],
      [VALE_IMP(), CULTIST(), VALE_IMP()],
      [BANDIT(), VALE_IMP(), BEE()],
      [BUCCANEER(), VALE_IMP()],
    ],
    4: [
      [CULTIST(), BANDIT(), VALE_IMP()],
      [CULTIST(), CULTIST(), BEE()],
      [CULTIST(), VALE_IMP(), CULTIST()],
      [CULTIST(), CULTIST(), CULTIST()],
      [BANDIT(), BANDIT(), VALE_IMP()],
      [BANDIT(), BANDIT(), BEE()],
      [BANDIT(), BANDIT(), BANDIT()],
      [BUCCANEER(), BUCCANEER()],
      [BUCCANEER(), VALE_IMP(), VALE_IMP()],
    ],
    5: [
      [BANDIT(), BANDIT(), BANDIT()],
      [BANDIT(), VALE_IMP(), BUCCANEER()],
      [BUCCANEER(), VALE_IMP(), VALE_IMP()],
      [BUCCANEER(), BUCCANEER(), BANDIT()],
      [CULTIST(), CULTIST(), CULTIST()],
      [BUCCANEER(), BUCCANEER(), BUCCANEER()],
    ],
  },
}
