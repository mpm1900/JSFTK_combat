import { tSkill } from '../type'
import { v4 } from 'uuid'

export const SPREAD_SHOT: tSkill = {
  id: v4(),
  name: 'Spread Shot',
  damageModifier: 0.5,
  splashDamageModifier: 0,
  targetType: 'group',
  damage: true,
  healing: false,
  rolls: 2,
  offset: -5,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
}
