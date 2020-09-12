import { tWeapon } from '../../type'
import { ZERO_STATS } from '../../../Stats/constants'
import { v4 } from 'uuid'
import { GLASS_SMASH } from '../../../Skill/objects/smash'

export const GLASS_HAMMER = (): tWeapon => ({
  id: v4(),
  name: `Glass Hammer`,
  itemType: 'weapon',
  type: 'blunt',
  rarity: 'rare',
  stat: 'strength',
  twoHand: false,
  breakable: true,
  damage: { type: 'physical', range: 'melee', value: 26 },
  skills: [GLASS_SMASH],
  immunities: [],
  stats: ZERO_STATS,
  goldValue: 40,
})
