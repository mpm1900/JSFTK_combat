import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const LEATHER_ARMOR = (): tArmor => ({
  id: v4(),
  name: `Leather Armor`,
  itemType: 'armor',
  resource: 'body',
  rarity: 'common',
  type: 'cloth-armor',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 5,
    resistance: 3,
  },
  skills: [],
  immunities: [],
  goldValue: 15,
})
