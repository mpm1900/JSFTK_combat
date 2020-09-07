import { tSkill } from '../type'
import { v4 } from 'uuid'

export const SHOCKWAVE: tSkill = {
  id: v4(),
  name: 'Shockwave',
  damageModifier: 1,
  splashDamageModifier: 0.5,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 4,
  offset: -10,
  perfectSplash: true,
  perfectPierce: false,
  perfectStatus: [],
}
