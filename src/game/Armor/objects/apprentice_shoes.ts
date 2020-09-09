import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const APPRENTICE_SHOES = (): tArmor => ({
  id: v4(),
  name: `Apprentice Shoes`,
  itemType: 'armor',
  resource: 'feet',
  rarity: 'common',
  type: 'footwear',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 1,
    resistance: 3,
    strength: -2,
    intelligence: 2,
  },
  skills: [],
  immunities: [],
})
