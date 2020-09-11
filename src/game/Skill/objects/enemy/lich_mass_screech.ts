import { tSkill } from '../../type'
import { v4 } from 'uuid'

export const LICH_MASS_SCREECH: tSkill = {
  id: v4(),
  name: 'Mass Screech',
  damageModifier: 0,
  splashDamageModifier: 0,
  targetType: 'group',
  damage: false,
  healing: false,
  rolls: 4,
  offset: 0,
  perfectSplash: false,
  perfectPierce: false,
  statusDurationOverride: 3,
  perfectStatus: ['stunned'],
}
