import { tWeapon } from './type'
import { ZERO_STATS } from '../Stats/constants'
import { v4 } from 'uuid'
import { createSkill } from '../Skill/skills'

export const FISTS = (): tWeapon => ({
  id: v4(),
  name: `Fists`,
  itemType: 'weapon',
  type: 'hammer',
  rarity: 'common',
  stat: 'vigor',
  twoHand: false,
  breakable: false,
  damage: { type: 'physical', range: 'melee', value: 4 },
  skills: [createSkill('Punch', 3, 0)],
  immunities: [],
  stats: ZERO_STATS,
  goldValue: 0,
})
