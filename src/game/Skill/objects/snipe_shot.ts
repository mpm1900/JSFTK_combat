import { tSkill } from '../type'
import { v4 } from 'uuid'

export const SNIPE_SHOT: tSkill = {
  id: v4(),
  name: 'Snipe Shot',
  damageModifier: 1,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 3,
  offset: -10,
  perfectSplash: false,
  perfectPierce: true,
  perfectStatus: [],
}
