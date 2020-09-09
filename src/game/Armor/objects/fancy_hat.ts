import { tArmor } from '../type'
import { ZERO_STATS } from '../../Stats/constants'
import { v4 } from 'uuid'

export const FANCY_HAT = (): tArmor => ({
  id: v4(),
  name: `Fancy Hat`,
  itemType: 'armor',
  resource: 'head',
  rarity: 'common',
  type: 'hat',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 1,
    resistance: 2,
    maxInspirationOffset: 1,
    charisma: 2,
    luck: 2,
  },
  skills: [],
  immunities: [],
})
