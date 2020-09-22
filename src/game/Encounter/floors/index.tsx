import { tFloorConfig } from '../type'
import { FloorConfig1, FLOOR_1_ID } from './level1/floor-1'
import { FloorConfig2A, FLOOR_2A_ID } from './level2/floor-2a'
import { FloorConfig3, FLOOR_3A_ID } from './floor-3'
import { LICH_ID } from '../../Character/bosses'

export const FLOOR_SIZE = 10
export const FLOOR_CONFIGS_BY_ID = (): Record<string, tFloorConfig> => ({
  [FLOOR_1_ID]: FloorConfig1(FLOOR_SIZE),
  [FLOOR_2A_ID]: FloorConfig2A(FLOOR_SIZE),
  [FLOOR_3A_ID]: FloorConfig3(),
})

export const BOSS_FLOOR_MAP = (): Record<string, string> => ({
  [LICH_ID]: FLOOR_2A_ID,
})
