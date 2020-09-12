import { tArmor } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../Stats/constants'

export const TRAVELLERS_TUNIC = (): tArmor => ({
  id: v4(),
  name: `Traveller's Tunic`,
  itemType: 'armor',
  resource: 'body',
  rarity: 'common',
  type: 'magic-armor',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 1,
    resistance: 1,
    evasion: 5,
    dexterity: 2,
    charisma: -2,
  },
  skills: [],
  immunities: [],
  goldValue: 30,
})
