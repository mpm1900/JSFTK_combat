import { tWeapon } from '../../type'
import { ZERO_STATS } from '../../../Stats/constants'
import { v4 } from 'uuid'
import { SMASH } from '../../../Skill/objects/smash'
import { DAZE } from '../../../Skill/objects/stun_attack'

export const CRUDE_CLUB = (): tWeapon => ({
  id: v4(),
  name: `Crude Club`,
  itemType: 'weapon',
  type: 'blunt',
  rarity: 'common',
  stat: 'strength',
  twoHand: false,
  breakable: false,
  damage: { type: 'physical', range: 'melee', value: 12 },
  skills: [SMASH, DAZE],
  immunities: [],
  stats: ZERO_STATS,
})
