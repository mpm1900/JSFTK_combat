import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const FUR_BOOTS = (): tArmor => ({
  id: v4(),
  name: `Fur Boots`,
  itemType: 'armor',
  resource: 'feet',
  rarity: 'common',
  type: 'footwear',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 2,
    resistance: 2,
    healthRegeneration: 1,
    vigor: 4,
  },
  skills: [],
  immunities: [],
})
