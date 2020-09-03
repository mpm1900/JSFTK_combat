import { ArmorT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { ZERO_STATS } from '../Stats'

export const FUR_ARMOR: ArmorT = {
  ...makeEntity(`Fur Armor`),
  rarity: 'uncommon',
  type: 'cloth-armor',
  traits: [
    {
      duration: -1,
      stats: {
        ...ZERO_STATS,
        armor: 5,
        resistance: 5,
        health: 5,
        healthRegen: 2,
        vigor: 4,
      },
      damage: 0,
    },
  ],
  skills: [],
}
