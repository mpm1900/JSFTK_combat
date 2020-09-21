import { tFloorConfig } from '../type'
import { LICH } from '../../Character/bosses'
import { WEAPONS_BY_LEVEL } from '../../Weapon/builders/objects'
import { ARMOR_BY_LEVEL } from '../../Armor/builders/sets'
import { buildFloorEnemeis } from './util'
import { Floor1EncounterSizes, Floor1EnemyConfigs } from './floor-1-config'
import { MIMIC_FLOOR_1 } from '../../Character/enemies/mimic_floor_1'

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

export const FloorConfig1 = (size: number): tFloorConfig => ({
  bosses: [LICH()],
  items: [
    ...FLOOR_1_WEAPONS().map((w) => w()),
    ...FLOOR_1_ARMOR().map((a) => a()),
  ],
  mimic: MIMIC_FLOOR_1,
  altEnemies: {},
  enemies: buildFloorEnemeis(Floor1EnemyConfigs, Floor1EncounterSizes, size),
})
