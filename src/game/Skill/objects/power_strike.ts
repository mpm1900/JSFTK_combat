import { tSkill } from '../type'
import { v4 } from 'uuid'

export const POWER_STRIKE: tSkill = {
  id: v4(),
  name: 'Power Strike',
  damageModifier: 1.6,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 2,
  offset: -15,
  perfectSplash: false,
  perfectPierce: true,
  perfectStatus: [],
}
