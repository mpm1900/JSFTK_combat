import { tArmor } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'

export const GOBLIN_VEST = (): tArmor => ({
  id: v4(),
  name: `Goblin Vest`,
  itemType: 'armor',
  resource: 'body',
  rarity: 'uncommon',
  type: 'cloth-armor',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 3,
    evasion: 5,
  },
  skills: [],
  immunities: [],
  goldValue: 30,
})
