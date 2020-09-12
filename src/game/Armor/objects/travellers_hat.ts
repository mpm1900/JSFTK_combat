import { tArmor } from '../type'
import { ZERO_STATS } from '../../Stats/constants'
import { v4 } from 'uuid'

export const TRAVELLERS_HAT = (): tArmor => ({
  id: v4(),
  name: `Traveller's Hat`,
  itemType: 'armor',
  resource: 'head',
  rarity: 'common',
  type: 'hat',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    resistance: 1,
    evasion: 3,
    dexterity: 1,
  },
  skills: [],
  immunities: [],
  goldValue: 15,
})
