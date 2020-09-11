import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { SHOT } from '../../../Skill/objects/shot'
import { SPREAD_SHOT } from '../../../Skill/objects/spread_shot'
import { PIN_DOWN } from '../../../Skill/objects/pin_down'

export const COMPOSITE_BOW = (): tWeapon => ({
  id: v4(),
  name: `Composite Bow`,
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
  skills: [SHOT, SPREAD_SHOT, PIN_DOWN],
  immunities: [],
})
