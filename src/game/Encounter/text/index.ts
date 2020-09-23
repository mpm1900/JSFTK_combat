import { FLOOR_3A_ID } from '../floors/floor-3'
import { FLOOR_1_ID } from '../floors/level1/floor-1'
import { FLOOR_2A_ID } from '../floors/level2/floor-2a'
import { FLOOR_2B_ID } from '../floors/level2/floor-2b'
import { tEncounter } from '../type'

export const ENCOUNTER_TEXTS: Record<
  string,
  Record<string, (pe?: tEncounter) => string>
> = {
  [FLOOR_1_ID]: {
    0: () =>
      'As your party begins their journey, you travel down an empty road. You arrive at a split path, you must make a choice on which way to proceed.',
    1: () =>
      `You notice a that the forest has been covered in a thick darkness. You feel a force pulling you deeper into the forest.`,
  },
  [FLOOR_2A_ID]: {},
  [FLOOR_2B_ID]: {},
  [FLOOR_3A_ID]: {},
}
