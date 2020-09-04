import { ArmorT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { ZERO_STATS } from '../Stats'

export const ADVENTURE_CLOAK: ArmorT = {
  ...makeEntity(`Adventure Cloak`),
  rarity: 'uncommon',
  type: 'magic-armor',
  traits: [
    {
      duration: -1,
      stats: {
        ...ZERO_STATS,
        armor: 5,
        resistance: 5,
        perception: 4,
        talent: -3,
      },
    },
  ],
  skills: [],
}
