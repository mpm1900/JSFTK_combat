import { ArmorT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { ZERO_STATS } from '../Stats'

export const PERFORMERS_VEST: ArmorT = {
  ...makeEntity(`Performer's Vest`),
  itemType: 'armor',
  rarity: 'uncommon',
  type: 'cloth-armor',
  traits: [
    {
      duration: -1,
      stats: {
        ...ZERO_STATS,
        armor: 6,
        resistance: 6,
        perception: -4,
        talent: 4,
        luck: 4,
      },
    },
  ],
  skills: [],
}
