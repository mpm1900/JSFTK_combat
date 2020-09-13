import { tArmor } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'

export const EXPLORERS_BOOTS = (): tArmor => ({
  id: v4(),
  name: `Explorer's Boots`,
  itemType: 'armor',
  resource: 'feet',
  rarity: 'common',
  type: 'footwear',
  stat: 'vigor',

  stats: {
    ...ZERO_STATS,
    armor: 2,
    evasion: 3,
    agility: 2,
  },

  skills: [],
  immunities: [],
  goldValue: 15,
})
