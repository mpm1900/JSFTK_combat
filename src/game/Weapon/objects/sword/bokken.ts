import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { STRIKE } from '../../../Skill/objects/smash'
import { RESTORE } from '../../../Skill/objects/restore'

export const BOKKEN = (): tWeapon => ({
  id: v4(),
  name: `Bokken`,
  itemType: 'weapon',
  type: 'sword',
  rarity: 'common',
  stat: 'strength',
  twoHand: false,
  breakable: false,
  damage: { type: 'physical', range: 'melee', value: 8 },
  stats: {
    ...ZERO_STATS,
  },
  skills: [STRIKE, RESTORE],
  immunities: [],
})
