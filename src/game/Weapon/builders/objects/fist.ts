import { tWeapon } from '../../type'
import { ZERO_STATS } from '../../../Stats/constants'
import { v4 } from 'uuid'
import { createSkill } from '../../../Skill/skills'
import { createWeapon } from '..'
import { CURE } from '../../../Consumable/objects/curing_potion'

export const FISTS = (): tWeapon => ({
  id: v4(),
  name: `Fists`,
  itemType: 'weapon',
  type: 'fist',
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

export const MONK_FISTS = (): tWeapon => ({
  ...createWeapon(
    'fist',
    'starting',
    [
      createSkill('Punch', 3, 0),
      createSkill('Cure', 2, 0, {
        targetType: 'ally',
        perfectStatus: ['cure'],
        weaponStatOverride: 'intelligence',
      }),
    ],
    {},
  ),
  stat: 'strength',
  name: 'Monk Fists',
})
