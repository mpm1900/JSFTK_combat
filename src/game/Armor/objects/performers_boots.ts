import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const PERFORMERS_BOOTS = (): tArmor => ({
  id: v4(),
  name: `Performer's Boots`,
  itemType: 'armor',
  resource: 'feet',
  rarity: 'common',
  type: 'footwear',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 2,
    resistance: 3,
    dexterity: -3,
    charisma: 3,
    luck: 3,
  },
  skills: [],
  immunities: [],
  goldValue: 15,
})
