import { tSkill } from '../type'
import { v4 } from 'uuid'

export const RUBATO: tSkill = {
  id: v4(),
  name: 'Rubato',
  damageModifier: 0.5,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: false,
  healing: false,
  rolls: 3,
  offset: -10,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['reset'],
}
