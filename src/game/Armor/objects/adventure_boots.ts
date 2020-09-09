import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const ADVENTURE_BOOTS = (): tArmor => ({
  id: v4(),
  name: `Adventure Boots`,
  itemType: 'armor',
  resource: 'feet',
  rarity: 'common',
  type: 'footwear',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 3,
    evasion: 4,
    agility: 3,
  },
  skills: [],
  immunities: [],
})
