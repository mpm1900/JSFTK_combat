import { WeaponT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { ZERO_STATS } from '../../Stats'
import { SHOT } from '../../skills/shot'
import { SPREAD_SHOT } from '../../skills/spread_shot'
import { PIN_DOWN } from '../../skills/pin_down'
import { SNIPE_SHOT } from '../../skills/snipe_shot'

export const CURVED_BOW = (): WeaponT => ({
  ...makeEntity(`Curved Bow`),
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
  skills: [SPREAD_SHOT, SNIPE_SHOT],
})
