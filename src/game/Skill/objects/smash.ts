import { tSkill } from '../type'
import { v4 } from 'uuid'

export const BASIC_ATTACK = (
  name: string,
  id?: string,
  rolls?: number,
): tSkill => ({
  id: id || v4(),
  name,
  damageModifier: 1,
  splashDamageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  rolls: rolls || 3,
  offset: 0,
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
})

const SMASH_ID = v4()
export const SMASH = BASIC_ATTACK('Smash', SMASH_ID)
const STRIKE_ID = v4()
export const STRIKE = BASIC_ATTACK('Strike', STRIKE_ID)
const CHOP_ID = v4()
export const CHOP = BASIC_ATTACK('Chop', CHOP_ID)
const PUNCH_ID = v4()
export const PUNCH = BASIC_ATTACK('Punch', PUNCH_ID)
const HOBO_STAB_ID = v4()
export const HOBO_STAB = BASIC_ATTACK('Stab', HOBO_STAB_ID)
