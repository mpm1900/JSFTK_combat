import { tArmor } from '../../type'
import { ZERO_STATS } from '../../../Stats/constants'
import { v4 } from 'uuid'

export const TOWN_GUARD_HELM = (): tArmor => ({
  id: v4(),
  name: `Town Guard Helm`,
  itemType: 'armor',
  resource: 'head',
  rarity: 'common',
  type: 'hat',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 3,
    resistance: 3,
  },
  skills: [],
  immunities: [],
  goldValue: 15,
})
