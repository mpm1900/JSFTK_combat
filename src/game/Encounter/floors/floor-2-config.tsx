import { FOREST_GOLEM } from '../../Character/elites/forest_golem'
import {
  BANSHEE,
  CONSECRATED_GUARD,
  CULTIST_SCHOLAR,
  FLAME_WISP,
} from '../../Character/enemies'
import { TOMB_GUARDIAN } from '../../Character/enemies/tomb_guardian'
import { TOMB_SPIDER } from '../../Character/enemies/tomb_spider'
import { TOMB_SPIRIT } from '../../Character/enemies/tomb_spirit'
import { tFloorEncounterSizes, tFloorEnemyConfig } from './util'

export const Floor2EnemyConfigs: tFloorEnemyConfig[] = [
  {
    enemy: TOMB_SPIRIT,
    depths: [0, 1, 2, 3, 4],
  },
  {
    enemy: TOMB_SPIDER,
    depths: [0, 1, 2, 3, 4],
  },
  {
    enemy: CULTIST_SCHOLAR,
    depths: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    enemy: FLAME_WISP,
    depths: [2, 3, 4, 5, 6, 7],
  },
  {
    enemy: TOMB_GUARDIAN,
    depths: [3, 4, 5, 6, 7],
  },
  {
    enemy: BANSHEE,
    depths: [5, 6, 7],
  },
  {
    enemy: CONSECRATED_GUARD,
    depths: [8, 9],
  },
]

export const Floor2AltEnemyConfigs: tFloorEnemyConfig[] = []

export const Floor2EliteEnemyConfigs: tFloorEnemyConfig[] = [
  {
    enemy: FOREST_GOLEM,
    depths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
]

export const Floor2EncounterSizes: tFloorEncounterSizes = {
  0: 3,
  1: 3,
  2: 3,
  3: 3,
  4: 3,
  5: 3,
  6: 3,
  7: 3,
  8: 2,
  9: 2,
}

export const Floor2EliteEncounterSizes: tFloorEncounterSizes = {
  0: 2,
  1: 2,
  2: 2,
  3: 2,
  4: 2,
  5: 2,
  6: 2,
  7: 3,
  8: 3,
  9: 3,
}
