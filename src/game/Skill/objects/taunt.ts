import { tSkill } from '../type'
import { v4 } from 'uuid'

export const TAUNT: tSkill = {
  id: v4(),
  name: 'Taunt',
  damageModifier: 0,
  splashDamageModifier: 0,
  targetType: 'self',
  damage: false,
  healing: false,
  rolls: 2,
  offset: 0,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['targeted'],
}
