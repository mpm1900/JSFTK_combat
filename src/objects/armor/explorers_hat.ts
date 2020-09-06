import { ArmorT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { ZERO_STATS } from '../Stats'

export const EXPLORERS_HAT = (): ArmorT => ({
  ...makeEntity(`Explorer's Hat`),
  itemType: 'armor',
  resource: 'head',
  rarity: 'common',
  type: 'hat',
  traits: [
    {
      duration: -1,
      stats: {
        ...ZERO_STATS,
        resistance: 3,
        evasion: 3,
        perception: 2,
      },
    },
  ],
  skills: [],
})
