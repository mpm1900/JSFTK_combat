import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const FUR_ARMOR = (): tArmor => ({
  id: v4(),
  name: `Fur Armor`,
  itemType: 'armor',
  resource: 'body',
  rarity: 'uncommon',
  type: 'cloth-armor',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 5,
    resistance: 5,
    maxHealthOffset: 5,
    healthRegeneration: 2,
    vigor: 4,
  },
  skills: [],
  immunities: [],
  goldValue: 45,
})
