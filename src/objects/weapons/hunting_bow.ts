import { WeaponT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { ZERO_STATS } from '../Stats'
import { SHOT } from '../skills/shot'
import { SNIPE_SHOT } from '../skills/snipe_shot'

export const HUNTING_BOW: WeaponT = {
  ...makeEntity(`Blacksmith's Hammer`),
  type: 'bow',
  rarity: 'common',
  twoHand: true,
  attackType: 'ranged',
  damage: { type: 'physical', damage: 6 },
  traits: [
    {
      duration: -1,
      stats: {
        ...ZERO_STATS,
        evasion: 3,
      },
      damage: 0,
    },
  ],
  skills: [SHOT, SNIPE_SHOT],
}
