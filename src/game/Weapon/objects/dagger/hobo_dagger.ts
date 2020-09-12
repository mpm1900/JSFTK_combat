import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { HOBO_STAB } from '../../../Skill/objects/smash'

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
  skills: [HOBO_STAB],
  immunities: ['poisoned'],
  goldValue: 0,
})
