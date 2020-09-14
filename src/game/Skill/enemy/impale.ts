import { tSkill } from '../type'
import { v4 } from 'uuid'

export const IMPALE: tSkill = {
  id: v4(),
  name: 'Impale',
  damageModifier: 1,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 5,
  offset: -5,
  perfectSplash: false,
  perfectPierce: true,
  perfectStatus: ['bleeding'],
}
