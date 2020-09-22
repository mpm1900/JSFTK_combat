import { tFloorConfig } from '../../type'
import { LICH, LICH2 } from '../../../Character/bosses'
import { WEAPONS_BY_LEVEL } from '../../../Weapon/builders/objects'
import { ARMOR_BY_LEVEL } from '../../../Armor/builders/sets'
import { buildFloorEnemeis } from '../util'
import {
  Floor1AltEnemyConfigs,
  Floor1EliteEncounterSizes,
  Floor1EliteEnemyConfigs,
  Floor1EncounterSizes,
  Floor1EnemyConfigs,
} from './floor-1-config'
import { MIMIC_FLOOR_1 } from '../../../Character/elites/mimic_floor_1'
import { v4 } from 'uuid'

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

export const FLOOR_1_ID = v4()
export const FloorConfig1 = (size: number): tFloorConfig => ({
  floorId: FLOOR_1_ID,
  bosses: [LICH()],
  altBosses: [LICH2()],
  items: [
    ...FLOOR_1_WEAPONS().map((w) => w()),
    ...FLOOR_1_ARMOR().map((a) => a()),
  ],
  mimic: MIMIC_FLOOR_1,

  eliteEnemies: buildFloorEnemeis(
    Floor1EliteEnemyConfigs,
    Floor1EliteEncounterSizes,
    size,
  ),
  enemies: buildFloorEnemeis(Floor1EnemyConfigs, Floor1EncounterSizes, size),
  altEnemies: buildFloorEnemeis(
    Floor1AltEnemyConfigs,
    Floor1EncounterSizes,
    size,
  ),
})
