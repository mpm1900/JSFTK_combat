import { tArmor } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'

export const LEATHER_GREAVES = (): tArmor => ({
  id: v4(),
  name: `Leather Greaves`,
  itemType: 'armor',
  resource: 'feet',
  rarity: 'common',
  type: 'footwear',
  stat: 'vigor',

  stats: {
    ...ZERO_STATS,
    armor: 2,
    strength: 1,
    agility: -1,
  },

  skills: [],
  immunities: [],
  goldValue: 15,
})
