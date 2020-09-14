import { tSkill } from '../type'
import { v4 } from 'uuid'

export const LICH_SMITE: tSkill = {
  id: v4(),
  name: 'Smite',
  damageModifier: 1,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 4,
  offset: 0,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['armor-down'],
}
