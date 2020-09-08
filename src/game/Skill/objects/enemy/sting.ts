import { tSkill } from '../../type'
import { v4 } from 'uuid'

export const STING: tSkill = {
  id: v4(),
  name: 'Sting',
  damageModifier: 1,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 3,
  offset: 0,
  perfectSplash: false,
  perfectPierce: true,
  perfectStatus: [],
}

export const INFECTIOUS_STING: tSkill = {
  id: v4(),
  name: 'Infectious Sting',
  damageModifier: 1,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 3,
  offset: -10,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['poisoned'],
}
