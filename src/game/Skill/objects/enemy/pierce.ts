import { tSkill } from '../../type'
import { v4 } from 'uuid'

export const PIERCE: tSkill = {
  id: v4(),
  name: 'Pierce',
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
