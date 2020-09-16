import { tFloorConfig } from '../type'
import { FloorConfig1 } from './floor-1'
import { FloorConfig2 } from './floor-2'

export const FLOOR_CONFIGS_BY_INDEX = (): Record<number, tFloorConfig> => ({
  0: FloorConfig1(),
  1: FloorConfig2(),
})
