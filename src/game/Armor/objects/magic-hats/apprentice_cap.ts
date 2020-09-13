import { tArmor } from '../../type'
import { ZERO_STATS } from '../../../Stats/constants'
import { v4 } from 'uuid'

export const APPRENTICE_CAP = (): tArmor => ({
  id: v4(),
  name: `Apprentice Cap`,
  itemType: 'armor',
  resource: 'head',
  rarity: 'common',
  type: 'magic-hat',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    resistance: 4,
    maxInspirationOffset: 1,
    intelligence: 2,
  },
  skills: [],
  immunities: [],
  goldValue: 15,
})
