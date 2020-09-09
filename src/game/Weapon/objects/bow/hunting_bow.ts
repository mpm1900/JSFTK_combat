import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { SHOT } from '../../../Skill/objects/shot'
import { SNIPE_SHOT } from '../../../Skill/objects/snipe_shot'

export const HUNTING_BOW = (): tWeapon => ({
  id: v4(),
  name: `Hunting Bow`,
  itemType: 'weapon',
  type: 'bow',
  rarity: 'common',
  stat: 'dexterity',
  twoHand: true,
  breakable: false,
  damage: { type: 'physical', range: 'ranged', value: 6 },
  stats: {
    ...ZERO_STATS,
    evasion: 3,
  },
  skills: [SHOT, SNIPE_SHOT],
  immunities: [],
})
