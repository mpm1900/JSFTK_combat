import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { GLASS_SHOT } from '../../../Skill/objects/shot'

export const GLASS_BOW = (): tWeapon => ({
  id: v4(),
  name: `Glass Bow`,
  itemType: 'weapon',
  type: 'bow',
  rarity: 'rare',
  stat: 'dexterity',
  twoHand: true,
  breakable: true,
  damage: { type: 'physical', range: 'ranged', value: 21 },
  stats: {
    ...ZERO_STATS,
    evasion: 5,
    damageModifiers: {
      ...ZERO_STATS.damageModifiers,
      flying: 0.15,
    },
  },
  skills: [GLASS_SHOT],
  immunities: [],
  goldValue: 40,
})
