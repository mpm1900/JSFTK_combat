import { tWeapon } from '../../type'
import { ZERO_STATS } from '../../../Stats/constants'
import { v4 } from 'uuid'
import { CUTTING_SWING } from '../../../Skill/objects/cutting_swing'

export const BANDIT_GLAIVE = (): tWeapon => ({
  id: v4(),
  name: `Bandit Glaive`,
  itemType: 'weapon',
  type: 'blunt',
  rarity: 'common',
  stat: 'dexterity',
  twoHand: true,
  breakable: true,
  damage: { type: 'physical', range: 'melee', value: 16 },
  skills: [CUTTING_SWING],
  immunities: [],
  stats: {
    ...ZERO_STATS,
    armor: 1,
  },
})
