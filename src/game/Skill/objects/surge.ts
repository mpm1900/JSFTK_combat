import { tSkill } from '../type'
import { v4 } from 'uuid'

export const SURGE: tSkill = {
  id: v4(),
  name: 'Surge',
  damageModifier: 0.8,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 3,
  offset: 0,
  perfectSplash: false,
  perfectPierce: true,
  perfectStatus: [],
}
