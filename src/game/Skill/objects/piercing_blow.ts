import { tSkill } from '../type'
import { v4 } from 'uuid'

export const PIERCING_BLOW: tSkill = {
  id: v4(),
  name: 'Piercing Blow',
  damageModifier: 1,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 2,
  offset: 0,
  perfectSplash: false,
  perfectPierce: true,
  perfectStatus: [],
}
