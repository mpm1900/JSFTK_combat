import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'
import { TAUNT } from '../../Skill/objects/taunt'

export const IRON_ROUND_SHIELD = (): tArmor => ({
  id: v4(),
  name: 'Iron Round Shield',
  itemType: 'armor',
  resource: 'offhand',
  rarity: 'common',
  type: 'shield',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 4,
    resistance: 2,
  },
  skills: [TAUNT],
  immunities: [],
  goldValue: 15,
})
