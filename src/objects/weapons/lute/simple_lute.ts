import { WeaponT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { ALTO } from '../../skills/alto'
import { DAZZLE } from '../../skills/dazzle'
import { ZERO_STATS } from '../../Stats'
import { RUBATO } from '../../skills/rubato'

export const SIMPLE_LUTE = (): WeaponT => ({
  ...makeEntity(`Simple Lute`),
  itemType: 'weapon',
  type: 'lute',
  rarity: 'common',
  twoHand: true,
  attackType: 'ranged',
  damage: { type: 'magic', damage: 6 },
  traits: [
    {
      duration: -1,
      stats: {
        ...ZERO_STATS,
        goldModifier: 12,
      },
    },
  ],
  skills: [ALTO, DAZZLE, RUBATO],
})
