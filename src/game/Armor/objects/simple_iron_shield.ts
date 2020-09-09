import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'
import { TAUNT } from '../../Skill/objects/taunt'

export const SIMPLE_IRON_SHIELD = (): tArmor => ({
  id: v4(),
  name: 'Simple Iron Shield',
  itemType: 'armor',
  resource: 'offhand',
  rarity: 'common',
  type: 'shield',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 1,
  },
  skills: [TAUNT],
  immunities: [],
})
