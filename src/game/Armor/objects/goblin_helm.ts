import { tArmor } from '../type'
import { ZERO_STATS } from '../../Stats/constants'
import { v4 } from 'uuid'

export const GOBLIN_HELM = (): tArmor => ({
  id: v4(),
  name: `Goblin Helm`,
  itemType: 'armor',
  resource: 'head',
  rarity: 'common',
  type: 'helmet',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 2,
    agility: 4,
  },
  skills: [],
  immunities: [],
})
