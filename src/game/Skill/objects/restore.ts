import { tSkill } from '../type'
import { v4 } from 'uuid'

export const RESTORE: tSkill = {
  id: v4(),
  name: 'Restore',
  damageModifier: 0,
  splashDamageModifier: 0,
  targetType: 'ally',
  damage: false,
  healing: false,
  rolls: 3,
  offset: 0,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['cure'],
}
