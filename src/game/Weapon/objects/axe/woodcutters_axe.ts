import { tWeapon } from '../../type'
import { ZERO_STATS } from '../../../Stats/constants'
import { v4 } from 'uuid'
import { CHOP } from '../../../Skill/objects/smash'
import { POWER_STRIKE } from '../../../Skill/objects/power_strike'

export const WOODCUTTERS_AXE = (): tWeapon => ({
  id: v4(),
  name: `Woodcutter's Axe`,
  itemType: 'weapon',
  type: 'axe',
  rarity: 'common',
  stat: 'strength',
  twoHand: true,
  breakable: false,
  damage: { type: 'physical', range: 'melee', value: 12 },
  skills: [CHOP, POWER_STRIKE],
  immunities: [],
  stats: ZERO_STATS,
  goldValue: 35,
})
