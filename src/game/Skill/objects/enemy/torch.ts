import { v4 } from 'uuid'
import { tSkill } from '../../type'

export const TORCH: tSkill = {
  id: v4(),
  name: 'Torch',
  damageModifier: 1,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 4,
  offset: 20,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['burning'],
}
