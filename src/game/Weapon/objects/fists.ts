import { tWeapon } from '../type'
import { ZERO_STATS } from '../../Stats/constants'
import { v4 } from 'uuid'
import { PUNCH } from '../../Skill/objects/smash'

export const FISTS = (): tWeapon => ({
  id: v4(),
  name: `Fists`,
  itemType: 'weapon',
  type: 'blunt',
  rarity: 'common',
  stat: 'vigor',
  twoHand: false,
  breakable: false,
  damage: { type: 'physical', range: 'melee', value: 4 },
  skills: [PUNCH],
  immunities: [],
  stats: ZERO_STATS,
})
