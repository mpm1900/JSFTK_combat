import { INFECTED_EYESTALK } from '../../../Character/enemies/infected_eyestalk'
import { tFloorEncounterSizes, tFloorEnemyConfig } from '../util'

export const Floor2BEnemyConfigs: tFloorEnemyConfig[] = [
  {
    enemy: INFECTED_EYESTALK,
    depths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
]

export const Floor2BAltEnemyConfigs: tFloorEnemyConfig[] = [
  {
    enemy: INFECTED_EYESTALK,
    depths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
]

export const Floor2BEliteEnemyConfigs: tFloorEnemyConfig[] = [
  {
    enemy: INFECTED_EYESTALK,
    depths: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
]

export const Floor2BEncounterSizes: tFloorEncounterSizes = {
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

export const Floor2BEliteEncounterSizes: tFloorEncounterSizes = {
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
