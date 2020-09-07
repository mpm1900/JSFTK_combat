import { WeaponT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { ZERO_STATS } from '../../Stats'
import { SHOT } from '../../skills/shot'
import { SPREAD_SHOT } from '../../skills/spread_shot'
import { PIN_DOWN } from '../../skills/pin_down'

export const COMPOSITE_BOW = (): WeaponT => ({
  ...makeEntity(`Composite Bow`),
  itemType: 'weapon',
  type: 'bow',
  rarity: 'common',
  twoHand: true,
  attackType: 'ranged',
  damage: { type: 'physical', damage: 11 },
  traits: [
    {
      duration: -1,
      stats: {
        ...ZERO_STATS,
        evasion: 4,
      },
    },
  ],
  skills: [SHOT, SPREAD_SHOT, PIN_DOWN],
})
