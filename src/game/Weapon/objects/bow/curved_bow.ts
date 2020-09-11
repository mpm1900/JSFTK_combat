import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { SPREAD_SHOT } from '../../../Skill/objects/spread_shot'
import { SNIPE_SHOT } from '../../../Skill/objects/snipe_shot'

export const CURVED_BOW = (): tWeapon => ({
  id: v4(),
  name: `Curved Bow`,
  itemType: 'weapon',
  type: 'bow',
  rarity: 'common',
  stat: 'dexterity',
  twoHand: true,
  breakable: false,
  damage: { type: 'physical', range: 'ranged', value: 11 },
  stats: {
    ...ZERO_STATS,
    evasion: 4,
    damageModifiers: {
      ...ZERO_STATS.damageModifiers,
      flying: 0.15,
    },
  },
  skills: [SPREAD_SHOT, SNIPE_SHOT],
  immunities: [],
})
