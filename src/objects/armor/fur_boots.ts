import { ArmorT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { ZERO_STATS } from '../Stats'

export const FUR_BOOTS: ArmorT = {
  ...makeEntity(`Fur Boots`),
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
        resistance: 2,
        healthRegen: 1,
        vigor: 4,
      },
    },
  ],
  skills: [],
}
