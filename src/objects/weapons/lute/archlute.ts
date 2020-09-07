import { WeaponT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { ZERO_STATS } from '../../Stats'
import { RITARDANDO } from '../../skills/ritardando'
import { SYMPHONY } from '../../skills/symphony'
import { RUBATO } from '../../skills/rubato'

export const ARCHLUTE = (): WeaponT => ({
  ...makeEntity(`Archlute`),
  itemType: 'weapon',
  type: 'lute',
  rarity: 'common',
  twoHand: true,
  attackType: 'ranged',
  damage: { type: 'magic', damage: 13 },
  traits: [
    {
      duration: -1,
      stats: {
        ...ZERO_STATS,
        goldModifier: 10,
      },
    },
  ],
  skills: [RITARDANDO, SYMPHONY, RUBATO],
})
