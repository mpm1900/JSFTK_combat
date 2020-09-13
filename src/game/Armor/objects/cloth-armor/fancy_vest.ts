import { tArmor } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'

export const FANCY_VEST = (): tArmor => ({
  id: v4(),
  name: `Fancy Vest`,
  itemType: 'armor',
  resource: 'body',
  rarity: 'uncommon',
  type: 'cloth-armor',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 4,
    resistance: 4,
    charisma: 4,
    luck: 4,
  },

  skills: [],
  immunities: [],
  goldValue: 30,
})
