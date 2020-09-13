import { tArmor } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'

export const EXPLORERS_CLOAK = (): tArmor => ({
  id: v4(),
  name: `Explorer's Cloak`,
  itemType: 'armor',
  resource: 'body',
  rarity: 'uncommon',
  type: 'magic-armor',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 3,
    resistance: 6,
    evasion: 6,
    dexterity: 3,
    charisma: -3,
  },
  skills: [],
  immunities: [],
  goldValue: 15,
})
