import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const TOWN_GUARD_ARMOR = (): tArmor => ({
  id: v4(),
  name: `Town Guard Armor`,
  itemType: 'armor',
  resource: 'body',
  rarity: 'common',
  type: 'cloth-armor',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 7,
    resistance: 5,
  },
  skills: [],
  immunities: [],
})
