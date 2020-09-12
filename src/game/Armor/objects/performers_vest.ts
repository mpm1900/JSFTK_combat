import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const PERFORMERS_VEST = (): tArmor => ({
  id: v4(),
  name: `Performer's Vest`,
  itemType: 'armor',
  resource: 'body',
  rarity: 'uncommon',
  type: 'cloth-armor',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 6,
    resistance: 6,
    dexterity: -4,
    charisma: 4,
    luck: 4,
  },

  skills: [],
  immunities: [],
  goldValue: 30,
})
