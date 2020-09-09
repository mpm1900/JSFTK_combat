import { tSkill } from '../type'
import { v4 } from 'uuid'

export const TIME_JUMP: tSkill = {
  id: v4(),
  name: 'Time Jump',
  damageModifier: 0,
  splashDamageModifier: 0,
  targetType: 'ally',
  damage: false,
  healing: false,
  rolls: 3,
  offset: -5,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['rushed'],
}
