import { tSkill } from '../type'
import { v4 } from 'uuid'

export const AREA_BLAST: tSkill = {
  id: v4(),
  name: 'Area Blast',
  damageModifier: 0.5,
  splashDamageModifier: 0,
  targetType: 'group',
  damage: true,
  healing: false,
  rolls: 3,
  offset: -5,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
}
