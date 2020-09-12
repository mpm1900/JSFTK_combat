import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const TRAVELLERS_BOOTS = (): tArmor => ({
  id: v4(),
  name: `Traveller's Boots`,
  itemType: 'armor',
  resource: 'feet',
  rarity: 'common',
  type: 'footwear',
  stat: 'vigor',

  stats: {
    ...ZERO_STATS,
    armor: 1,
    evasion: 2,
    dexterity: 1,
    agility: 1,
  },

  skills: [],
  immunities: [],
  goldValue: 15,
})
