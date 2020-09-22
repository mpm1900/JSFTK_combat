import { ARMOR_BY_LEVEL } from '../../Armor/builders/sets'
import { CONSECRATED_BEAST } from '../../Character/bosses/consecrated_beast'
import { WEAPONS_BY_LEVEL } from '../../Weapon/builders/objects'
import { MIMIC_FLOOR_1 } from '../../Character/elites/mimic_floor_1'
import { tFloorConfig } from '../type'
import { buildFloorEnemeis } from './util'
import { Floor2EnemyConfigs, Floor2EncounterSizes } from './floor-2-config'

const FLOOR_2_WEAPONS = () => [
  ...WEAPONS_BY_LEVEL[3],
  ...WEAPONS_BY_LEVEL[4],
  ...WEAPONS_BY_LEVEL[5],
]

const FLOOR_2_ARMOR = () => [...ARMOR_BY_LEVEL[3], ...ARMOR_BY_LEVEL[4]]

export const FloorConfig2 = (size: number): tFloorConfig => ({
  bosses: [CONSECRATED_BEAST()],
  altBosses: [CONSECRATED_BEAST()],
  items: [
    ...FLOOR_2_WEAPONS().map((w) => w()),
    ...FLOOR_2_ARMOR().map((w) => w()),
  ],
  mimic: MIMIC_FLOOR_1,
  altEnemies: buildFloorEnemeis(Floor2EnemyConfigs, Floor2EncounterSizes, size),
  eliteEnemies: {},
  enemies: buildFloorEnemeis(Floor2EnemyConfigs, Floor2EncounterSizes, size),
})
