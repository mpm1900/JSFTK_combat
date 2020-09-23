import { tFloorConfig } from '../type'
import { FloorConfig1, FLOOR_1_ID } from './level1/floor-1'
import { FloorConfig2A, FLOOR_2A_ID } from './level2/floor-2a'
import { FloorConfig3, FLOOR_3A_ID } from './floor-3'
import {
  CONSECRATED_BEAST_ID,
  FOREST_MIND_ID,
  LICH_ID,
} from '../../Character/bosses'
import { FloorConfig2B, FLOOR_2B_ID } from './level2/floor-2b'

export const FLOOR_SIZE = 10
export const FLOOR_CONFIGS_BY_ID = (): Record<string, tFloorConfig> => ({
  [FLOOR_1_ID]: FloorConfig1(FLOOR_SIZE),
  [FLOOR_2A_ID]: FloorConfig2A(FLOOR_SIZE),
  [FLOOR_2B_ID]: FloorConfig2B(FLOOR_SIZE),
  [FLOOR_3A_ID]: FloorConfig3(),
})

export const FLOOR_NAMES: Record<string, string> = {
  [FLOOR_1_ID]: 'The Forgotten Woods',
  [FLOOR_2A_ID]: 'The Consecrated Tomb',
  [FLOOR_2B_ID]: 'Forest of the Formless One',
  [FLOOR_3A_ID]: 'Realm of the Ancients',
}

export const BOSS_FLOOR_MAP = (): Record<string, string> => ({
  [LICH_ID]: FLOOR_2A_ID,
  [FOREST_MIND_ID]: FLOOR_2B_ID,
  [CONSECRATED_BEAST_ID]: FLOOR_3A_ID,
})
