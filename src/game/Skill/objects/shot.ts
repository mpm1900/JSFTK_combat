import { tSkill } from '../type'
import { v4 } from 'uuid'

export const SHOT: tSkill = {
  id: v4(),
  name: 'Shot',
  damageModifier: 1,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 3,
  offset: 0,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
}

export const GLASS_SHOT = {
  ...SHOT,
  rolls: 1,
}
