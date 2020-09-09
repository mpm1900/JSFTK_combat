import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const CLOTH_SHOES = (): tArmor => ({
  id: v4(),
  name: `Cloth Shoes`,
  itemType: 'armor',
  resource: 'feet',
  rarity: 'common',
  type: 'footwear',
  stat: 'vigor',

  stats: {
    ...ZERO_STATS,
    resistance: 1,
    charisma: 1,
    luck: 1,
  },

  skills: [],
  immunities: [],
})
