import { FOREST_GOLEM } from '../../../Character/elites/forest_golem'
import {
  CULTIST,
  CULTIST_BRUTE,
  FOREST_BEAST,
  FOREST_BOAR,
  FOREST_RAVEN,
  FOREST_SNAKE,
  FOREST_TROLL,
  FOREST_WITCH,
  FOREST_WOLF,
} from '../../../Character/enemies'
import { INFECTED_BITER } from '../../../Character/enemies/infected_biter'
import { INFECTED_EYESTALK } from '../../../Character/enemies/infected_eyestalk'
import { INFECTED_LEACH } from '../../../Character/enemies/infected_leech'
import { TOMB_SPIRIT } from '../../../Character/enemies/tomb_spirit'
import { tFloorEncounterSizes, tFloorEnemyConfig } from '../util'

export const Floor1EnemyConfigs: tFloorEnemyConfig[] = [
  {
    enemy: FOREST_WOLF,
    depths: [0, 1, 2],
  },
  {
    enemy: FOREST_BEAST,
    depths: [0, 1, 2, 3],
  },
  {
    enemy: FOREST_SNAKE,
    depths: [0, 1, 2, 3, 4],
  },
  {
    enemy: FOREST_WITCH,
    depths: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    enemy: FOREST_RAVEN,
    depths: [2, 3, 4, 5, 6],
  },
  {
    enemy: FOREST_TROLL,
    depths: [3, 4, 5, 6, 7],
  },
  {
    enemy: FOREST_BOAR,
    depths: [4, 5, 6, 7],
  },
  {
    enemy: CULTIST,
    depths: [3, 4, 5, 6, 7],
  },
  {
    enemy: CULTIST_BRUTE,
    depths: [4, 5, 6, 7],
  },
  {
    enemy: TOMB_SPIRIT,
    depths: [8, 9],
  },
]

export const Floor1AltEnemyConfigs: tFloorEnemyConfig[] = [
  {
    enemy: FOREST_WOLF,
    depths: [0, 1, 2],
  },
  {
    enemy: FOREST_BEAST,
    depths: [0, 1, 2, 3],
  },
  {
    enemy: INFECTED_BITER,
    depths: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    enemy: FOREST_WITCH,
    depths: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    enemy: INFECTED_LEACH,
    depths: [2, 3, 4, 5, 6, 7],
  },
  {
    enemy: FOREST_TROLL,
    depths: [3, 4, 5, 6, 7],
  },
  {
    enemy: FOREST_BOAR,
    depths: [4, 5, 6, 7],
  },
  {
    enemy: CULTIST,
    depths: [3, 4, 5, 6, 7],
  },
  {
    enemy: CULTIST_BRUTE,
    depths: [4, 5, 6, 7],
  },
  {
    enemy: INFECTED_EYESTALK,
    depths: [8, 9],
  },
]

export const Floor1EliteEnemyConfigs: tFloorEnemyConfig[] = [
  {
    enemy: FOREST_GOLEM,
    depths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
]

export const Floor1EncounterSizes: tFloorEncounterSizes = {
  0: 1,
  1: 2,
  2: 3,
  3: 3,
  4: 3,
  5: 3,
  6: 3,
  7: 3,
  8: 2,
  9: 2,
}

export const Floor1EliteEncounterSizes: tFloorEncounterSizes = {
  0: 1,
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
