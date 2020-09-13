import { tArmor } from '../../type'
import { ZERO_STATS } from '../../../Stats/constants'
import { v4 } from 'uuid'

export const EXPLORERS_HAT = (): tArmor => ({
  id: v4(),
  name: `Explorer's Hat`,
  itemType: 'armor',
  resource: 'head',
  rarity: 'common',
  type: 'hat',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    resistance: 3,
    evasion: 3,
    dexterity: 2,
  },
  skills: [],
  immunities: [],
  goldValue: 15,
})
