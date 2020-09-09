import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { SMASH } from '../../../Skill/objects/smash'
import { STUN_ATTACK } from '../../../Skill/objects/stun_attack'

export const MACE = (): tWeapon => ({
  id: v4(),
  name: `Mace`,
  itemType: 'weapon',
  type: 'blunt',
  rarity: 'common',
  stat: 'strength',
  twoHand: false,
  breakable: false,
  damage: { type: 'physical', range: 'melee', value: 21 },
  stats: ZERO_STATS,
  skills: [SMASH, STUN_ATTACK],
  immunities: [],
})
