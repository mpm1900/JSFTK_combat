import { tSkill } from '../type'
import { v4 } from 'uuid'

export const PROTECT: tSkill = {
  id: v4(),
  name: 'Protect',
  damageModifier: 0,
  splashDamageModifier: 0,
  targetType: 'ally',
  damage: false,
  healing: false,
  rolls: 2,
  offset: 0,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['protected'],
}
