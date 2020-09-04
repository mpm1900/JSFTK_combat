import { ArmorT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { ZERO_STATS } from '../Stats'

export const EXPLORERS_BOOTS: ArmorT = {
  ...makeEntity(`Explorer's Boots`),
  itemType: 'armor',
  resource: 'feet',
  rarity: 'common',
  type: 'footwear',
  traits: [
    {
      duration: -1,
      stats: {
        ...ZERO_STATS,
        armor: 2,
        evasion: 3,
        agility: 2,
      },
    },
  ],
  skills: [],
}
