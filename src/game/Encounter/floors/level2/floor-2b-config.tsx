import { useEffect, useMemo } from 'react'
import { LICH } from '../../../Character/bosses'
import { TOMB_GARGOYLE } from '../../../Character/elites/tomb_gargoyle'
import { FOREST_FAIRY } from '../../../Character/enemies/forest_fairy'
import { FOREST_REAPER } from '../../../Character/enemies/forest_reaper'
import { FOREST_SLIME } from '../../../Character/enemies/forest_slime'
import { INFECTED_EYESTALK } from '../../../Character/enemies/infected_eyestalk'
import { INFECTED_GOLEM } from '../../../Character/enemies/infected_golem'
import { INFECTED_MASS } from '../../../Character/enemies/infected_mass'
import { LIGHTNING_IMP } from '../../../Character/enemies/lightning_imp'
import { tFloorEncounterSizes, tFloorEnemyConfig } from '../util'

export const Floor2BEnemyConfigs = (): tFloorEnemyConfig[] => [
  {
    enemy: INFECTED_EYESTALK,
    depths: [0, 1, 2, 3, 4, 5],
  },
  {
    enemy: FOREST_SLIME,
    depths: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    enemy: INFECTED_MASS,
    depths: [2, 3, 4, 5, 6, 7],
  },
  {
    enemy: INFECTED_GOLEM,
    depths: [4, 5, 6, 7],
  },
  {
    enemy: FOREST_FAIRY,
    depths: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    enemy: LIGHTNING_IMP,
    depths: [2, 3, 4, 5, 6, 7],
  },
  {
    enemy: FOREST_REAPER,
    depths: [8, 9],
  },
]

export const Floor2BAltEnemyConfigs = (): tFloorEnemyConfig[] => [
  {
    enemy: INFECTED_EYESTALK,
    depths: [0, 1, 2, 3, 4, 5],
  },
  {
    enemy: FOREST_SLIME,
    depths: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    enemy: INFECTED_MASS,
    depths: [2, 3, 4, 5, 6, 7],
  },
  {
    enemy: INFECTED_GOLEM,
    depths: [4, 5, 6, 7],
  },
  {
    enemy: FOREST_FAIRY,
    depths: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    enemy: LIGHTNING_IMP,
    depths: [2, 3, 4, 5, 6, 7],
  },
  {
    enemy: FOREST_REAPER,
    depths: [8, 9],
  },
]

export const Floor2BEliteEnemyConfigs = (): tFloorEnemyConfig[] => [
  {
    enemy: TOMB_GARGOYLE,
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
