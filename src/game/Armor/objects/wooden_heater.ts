import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'
import { TAUNT } from '../../Skill/objects/taunt'

export const WOODEN_HEATER = (): tArmor => ({
  id: v4(),
  name: 'Wooden Heater',
  itemType: 'armor',
  resource: 'offhand',
  rarity: 'common',
  type: 'shield',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 2,
    resistance: 2,
  },
  skills: [TAUNT],
  immunities: [],
  goldValue: 20,
})
