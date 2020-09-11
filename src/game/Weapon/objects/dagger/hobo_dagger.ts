import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { STAB } from '../../../Skill/objects/enemy/stab'

export const HOBO_DAGGER = (): tWeapon => ({
  id: v4(),
  name: `Hobo Dagger`,
  itemType: 'weapon',
  type: 'dagger',
  rarity: 'common',
  stat: 'dexterity',
  twoHand: false,
  breakable: false,
  damage: { type: 'physical', range: 'melee', value: 6 },
  stats: {
    ...ZERO_STATS,
  },
  skills: [STAB],
  immunities: ['poisoned'],
})
