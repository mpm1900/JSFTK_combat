import { ARMOR_BY_LEVEL } from '../../../Armor/builders/sets'
import { WEAPONS_BY_LEVEL } from '../../../Weapon/builders/objects'
import { MIMIC_FLOOR_2 } from '../../../Character/elites/mimic_floor_2'
import { tFloorConfig } from '../../type'
import { buildFloorEnemeis } from '../util'
import {
  Floor2BEnemyConfigs,
  Floor2BEncounterSizes,
  Floor2BEliteEnemyConfigs,
  Floor2BEliteEncounterSizes,
  Floor2BAltEnemyConfigs,
} from './floor-2b-config'
import { v4 } from 'uuid'
import { BEHOLD } from '../../../Character/bosses/behold'

const FLOOR_2_WEAPONS = () => [
  ...WEAPONS_BY_LEVEL[3],
  ...WEAPONS_BY_LEVEL[4],
  ...WEAPONS_BY_LEVEL[5],
]

const FLOOR_2_ARMOR = () => [...ARMOR_BY_LEVEL[3], ...ARMOR_BY_LEVEL[4]]

export const FLOOR_2B_ID = v4()
export const FloorConfig2B = (size: number): tFloorConfig => ({
  floorId: FLOOR_2B_ID,
  bosses: [BEHOLD()],
  altBosses: [BEHOLD()],
  items: [
    ...FLOOR_2_WEAPONS().map((w) => w()),
    ...FLOOR_2_ARMOR().map((w) => w()),
  ],
  mimic: MIMIC_FLOOR_2,
  altEnemies: buildFloorEnemeis(
    Floor2BAltEnemyConfigs(),
    Floor2BEncounterSizes,
    size,
  ),
  eliteEnemies: buildFloorEnemeis(
    Floor2BEliteEnemyConfigs(),
    Floor2BEliteEncounterSizes,
    size,
  ),
  enemies: buildFloorEnemeis(
    Floor2BEnemyConfigs(),
    Floor2BEncounterSizes,
    size,
  ),
})
