import { tEncounter } from '../type'

export const ENCOUNTER_TEXTS: Record<
  number,
  Record<number, (pe?: tEncounter) => string>
> = {
  0: {
    0: () =>
      'As your party begins their journey, you travel down an empty road. You arrive at a split path, you must make a choice on which way to proceed.',
    1: () =>
      `You notice a that the forest has been covered in a thick darkness. You feel a force pulling you deeper into the forest.`,
  },
  1: {},
  2: {},
}
