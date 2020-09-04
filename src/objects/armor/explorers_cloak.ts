import { ArmorT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { ZERO_STATS } from '../Stats'

export const EXPLORERS_CLOAK: ArmorT = {
  ...makeEntity(`Explorer's Cloak`),
  itemType: 'armor',
  resource: 'body',
  rarity: 'uncommon',
  type: 'magic-armor',
  traits: [
    {
      duration: -1,
      stats: {
        ...ZERO_STATS,
        armor: 3,
        resistance: 6,
        evasion: 6,
        perception: 3,
        talent: -3,
      },
    },
  ],
  skills: [],
}
