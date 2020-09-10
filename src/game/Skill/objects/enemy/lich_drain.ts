import { tSkill } from '../../type'
import { v4 } from 'uuid'

export const LICH_DRAIN: tSkill = {
  id: v4(),
  name: 'Drain',
  damageModifier: 0.5,
  splashDamageModifier: 0,
  weaponStatOverride: 'intelligence',
  targetType: 'group',
  damage: true,
  healing: false,
  rolls: 4,
  offset: 0,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['speed-down'],
}
