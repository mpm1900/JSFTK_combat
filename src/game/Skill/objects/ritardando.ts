import { tSkill } from '../type'
import { v4 } from 'uuid'

export const RITARDANDO: tSkill = {
  id: v4(),
  name: 'Ritardando',
  damageModifier: 0.5,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 4,
  offset: 0,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['speed-down'],
}
