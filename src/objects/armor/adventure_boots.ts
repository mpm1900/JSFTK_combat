import { ArmorT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { ZERO_STATS } from '../Stats'

export const ADVENTURE_BOOTS = (): ArmorT => ({
  ...makeEntity(`Adventure Boots`),
  itemType: 'armor',
  resource: 'feet',
  rarity: 'common',
  type: 'footwear',
  traits: [
    {
      duration: -1,
      stats: {
        ...ZERO_STATS,
        armor: 3,
        evasion: 4,
        agility: 3,
      },
    },
  ],
  skills: [],
})
