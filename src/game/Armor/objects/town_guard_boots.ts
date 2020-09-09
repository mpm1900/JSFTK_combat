import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const TOWN_GUARD_BOOTS = (): tArmor => ({
  id: v4(),
  name: `Town Guard Boots`,
  itemType: 'armor',
  resource: 'feet',
  rarity: 'common',
  type: 'footwear',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 3,
    resistance: 2,
  },
  skills: [],
  immunities: [],
})
