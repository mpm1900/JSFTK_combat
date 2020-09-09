import { tSkill } from '../type'
import { v4 } from 'uuid'

export const PIN_DOWN: tSkill = {
  id: v4(),
  name: 'Pin Down',
  damageModifier: 1,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 2,
  offset: -10,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['speed-down'],
}
