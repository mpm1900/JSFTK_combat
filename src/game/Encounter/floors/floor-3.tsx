import { LICH } from '../../Character/bosses'
import { CONSECRATED_BEAST } from '../../Character/bosses/consecrated_beast'
import { CONSECRATED_GUARD } from '../../Character/enemies'
import { WEAPONS_BY_LEVEL } from '../../Weapon/builders/objects'
import { tFloorConfig } from '../type'
import { MIMIC_FLOOR_1 } from '../../Character/enemies/mimic_floor_1'
import { makeRandomFloorEncounter } from './util'

const FLOOR_3_WEAPONS = () => [
  ...WEAPONS_BY_LEVEL[3],
  ...WEAPONS_BY_LEVEL[4],
  ...WEAPONS_BY_LEVEL[5],
]

export const FloorConfig3 = (): tFloorConfig => ({
  bosses: [],
  items: [...FLOOR_3_WEAPONS().map((w) => w())],
  mimic: MIMIC_FLOOR_1,
  altEnemies: {},
  enemies: {
    0: [[CONSECRATED_GUARD(), CONSECRATED_GUARD(), CONSECRATED_GUARD()]],
    1: [makeRandomFloorEncounter([CONSECRATED_GUARD, LICH], 3)],
  },
})
