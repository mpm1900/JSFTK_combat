import { tSkill } from '../type'
import { v4 } from 'uuid'

export const SYMPHONY: tSkill = {
  id: v4(),
  name: 'Symphony',
  damageModifier: 0.5,
  splashDamageModifier: 0,
  targetType: 'group',
  damage: true,
  healing: false,
  rolls: 4,
  offset: -5,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
}
