import { v4 } from 'uuid'
import { tSkill } from '../type'

export const DAZZLE: tSkill = {
  id: v4(),
  name: 'Dazzle',
  damageModifier: 0.5,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 2,
  offset: -5,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['stunned'],
}
