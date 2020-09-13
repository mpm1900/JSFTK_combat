import { tWeapon } from '../../type'
import { ZERO_STATS } from '../../../Stats/constants'
import { v4 } from 'uuid'
import { SMASH } from '../../../Skill/objects/smash'
import { SHOCKWAVE } from '../../../Skill/objects/shockwave'

export const BLACKSMITHS_HAMMER = (): tWeapon => ({
  id: v4(),
  name: `Blacksmith's Hammer`,
  itemType: 'weapon',
  type: 'blunt',
  rarity: 'common',
  stat: 'strength',
  twoHand: false,
  breakable: false,
  damage: { type: 'physical', range: 'melee', value: 100 },
  skills: [SMASH, SHOCKWAVE],
  immunities: [],
  stats: {
    ...ZERO_STATS,
    agility: 100,
    maxHealthOffset: 100,
  },
  goldValue: 10,
})
