import { WeaponT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { ZERO_STATS } from '../../Stats'
import { RITARDANDO } from '../../skills/ritardando'
import { SYMPHONY } from '../../skills/symphony'
import { DAZZLE } from '../../skills/dazzle'

export const BARBAT = (): WeaponT => ({
  ...makeEntity(`Barbat`),
  itemType: 'weapon',
  type: 'lute',
  rarity: 'common',
  twoHand: true,
  attackType: 'ranged',
  damage: { type: 'magic', damage: 9 },
  traits: [
    {
      duration: -1,
      stats: {
        ...ZERO_STATS,
        goldModifier: 10,
      },
    },
  ],
  skills: [RITARDANDO, SYMPHONY, DAZZLE],
})
