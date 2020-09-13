import { tArmor } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'

export const APRRENTICE_ROBE = (): tArmor => ({
  id: v4(),
  name: `Apprentice Robe`,
  itemType: 'armor',
  resource: 'body',
  rarity: 'uncommon',
  type: 'magic-armor',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 2,
    resistance: 6,
    maxInspirationOffset: 1,
    strength: -3,
    intelligence: 3,
  },
  skills: [],
  immunities: [
    'cursed-vigor',
    'cursed-strength',
    'cursed-dexterity',
    'cursed-intelligence',
    'cursed-charisma',
    'cursed-agility',
    'cursed-luck',
  ],
  goldValue: 30,
})
