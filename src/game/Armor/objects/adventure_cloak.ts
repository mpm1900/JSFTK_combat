import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const ADVENTURE_CLOAK = (): tArmor => ({
  id: v4(),
  name: `Adventure Cloak`,
  itemType: 'armor',
  resource: 'body',
  rarity: 'uncommon',
  type: 'magic-armor',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 5,
    resistance: 5,
    dexterity: 4,
    charisma: -3,
  },
  skills: [],
  immunities: [],
  goldValue: 30,
})
