import { tSkill } from '../type'
import { v4 } from 'uuid'

export const LICH_SCREECH: tSkill = {
  id: v4(),
  name: 'Screech',
  damageModifier: 0,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: false,
  healing: false,
  rolls: 2,
  offset: 0,
  perfectSplash: false,
  perfectPierce: false,
  statusDurationOverride: 3,
  perfectStatus: ['stunned'],
}
