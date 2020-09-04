import { ArmorT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { ZERO_STATS } from '../Stats'

export const PERFORMERS_BOOTS: ArmorT = {
  ...makeEntity(`Performer's Boots`),
  itemType: 'armor',
  rarity: 'common',
  type: 'footwear',
  traits: [
    {
      duration: -1,
      stats: {
        ...ZERO_STATS,
        armor: 2,
        resistance: 3,
        perception: -3,
        talent: 3,
        luck: 3,
      },
    },
  ],
  skills: [],
}
