import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const CHAIN_MAIL_VEST = (): tArmor => ({
  id: v4(),
  name: `Chain Mail Vest`,
  itemType: 'armor',
  resource: 'body',
  rarity: 'uncommon',
  type: 'armor',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 4,
    strength: 2,
    intelligence: -2,
  },
  skills: [],
  immunities: [],
})
