import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const LEATHER_VEST = (): tArmor => ({
  id: v4(),
  name: `Leather Vest`,
  itemType: 'armor',
  resource: 'body',
  rarity: 'common',
  type: 'cloth-armor',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 3,
    resistance: 1,
  },
  skills: [],
  immunities: [],
  goldValue: 20,
})
