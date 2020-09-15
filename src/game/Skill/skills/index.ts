import { v4 } from 'uuid'
import { tSkill } from '../type'

export const createSkill = (
  name: string,
  rolls: number,
  offset: number,
  rest: Partial<tSkill> = {},
): tSkill => {
  return {
    id: v4(),
    name,
    damageModifier: 1,
    splashDamageModifier: 0,
    targetType: 'single',
    damage: true,
    healing: false,
    rolls,
    offset,
    perfectSplash: false,
    perfectPierce: false,
    perfectStatus: [],
    ...rest,
  }
}
