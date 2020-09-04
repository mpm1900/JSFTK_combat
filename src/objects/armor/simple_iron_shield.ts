import { ArmorT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { ZERO_STATS } from '../Stats'
import { TAUNT } from '../skills/taunt'

export const SIMPLE_IRON_SHIELD: ArmorT = {
  ...makeEntity('Simple Iron Shield'),
  rarity: 'common',
  type: 'shield',
  traits: [
    {
      duration: -1,
      stats: {
        ...ZERO_STATS,
        armor: 1,
      },
    },
  ],
  skills: [TAUNT],
}
