import { tFloorConfig } from '../type'
import { FloorConfig1 } from './floor-1'
import { FloorConfig2 } from './floor-2'
import { FloorConfig3 } from './floor-3'

export const FLOOR_SIZE = 10
export const FLOOR_CONFIGS_BY_INDEX = (): Record<number, tFloorConfig> => ({
  0: FloorConfig1(FLOOR_SIZE),
  1: FloorConfig2(FLOOR_SIZE),
  2: FloorConfig3(),
})
