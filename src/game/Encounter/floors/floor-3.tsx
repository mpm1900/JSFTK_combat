import { LICH } from '../../Character/bosses'
import { WEAPONS_BY_LEVEL } from '../../Weapon/builders/objects'
import { tFloorConfig } from '../type'
import { makeRandomFloorEncounter } from './util'

const FLOOR_3_WEAPONS = () => [
  ...WEAPONS_BY_LEVEL[3],
  ...WEAPONS_BY_LEVEL[4],
  ...WEAPONS_BY_LEVEL[5],
]

export const FloorConfig3 = (): tFloorConfig => ({
  bosses: [],
  items: [],
  enemies: {},
})
