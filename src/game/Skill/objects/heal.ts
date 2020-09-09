import { tSkill } from '../type'
import { v4 } from 'uuid'

const id = v4()
export const HEAL = (consumableId: string): tSkill => ({
  id,
  name: 'Heal',
  damageModifier: 0,
  splashDamageModifier: 0,
  targetType: 'self',
  rolls: 0,
  offset: 0,
  damage: false,
  healing: true,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
  consumableId,
})
