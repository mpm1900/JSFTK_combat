import { tArmor } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { TAUNT } from '../../../Skill/objects/taunt'

export const WARD_SHIELD = (): tArmor => ({
  id: v4(),
  name: 'Ward Shield',
  itemType: 'armor',
  resource: 'offhand',
  rarity: 'uncommon',
  type: 'magic-shield',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    resistance: 2,
  },
  skills: [TAUNT],
  immunities: [],
  goldValue: 25,
})
