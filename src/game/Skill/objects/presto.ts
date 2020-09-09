import { tSkill } from '../type'
import { v4 } from 'uuid'

export const PRESTO: tSkill = {
  id: v4(),
  name: 'Presto',
  damageModifier: 0,
  splashDamageModifier: 0,
  targetType: 'ally',
  damage: false,
  healing: false,
  rolls: 2,
  offset: 0,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['rushed'],
}
