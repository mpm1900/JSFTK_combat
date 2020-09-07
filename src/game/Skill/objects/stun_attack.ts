import { tSkill } from '../type'
import { v4 } from 'uuid'

export const STUN_ATTACK: tSkill = {
  id: v4(),
  name: 'Stun Attack',
  damageModifier: 0.5,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: 3,
  offset: -10,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: ['stunned'],
}

export const DAZE = {
  ...STUN_ATTACK,
  name: 'Daze',
}
