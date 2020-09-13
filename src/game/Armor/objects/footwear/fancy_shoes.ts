import { tArmor } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'

export const FANCY_SHOES = (): tArmor => ({
  id: v4(),
  name: `Fancy Shoes`,
  itemType: 'armor',
  resource: 'feet',
  rarity: 'common',
  type: 'footwear',
  stat: 'vigor',

  stats: {
    ...ZERO_STATS,
    armor: 1,
    resistance: 2,
    dexterity: -2,
    charisma: 2,
    luck: 2,
  },

  skills: [],
  immunities: [],
  goldValue: 15,
})
