import { v4 } from 'uuid'
import { tSkill } from '../type'

export const BLEED: tSkill = {
  id: v4(),
  name: 'Bleed',
  damageModifier: 1,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 3,
  offset: 0,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['bleeding'],
}
