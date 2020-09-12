import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { PIERCING_BLOW } from '../../../Skill/objects/piercing_blow'

export const WAR_PICK = (): tWeapon => ({
  id: v4(),
  name: `War Pick`,
  itemType: 'weapon',
  type: 'blunt',
  rarity: 'common',
  stat: 'strength',
  twoHand: false,
  breakable: false,
  damage: { type: 'physical', range: 'melee', value: 14 },
  stats: {
    ...ZERO_STATS,
    agility: 5,
    criticalChance: 5,
  },
  skills: [PIERCING_BLOW],
  immunities: [],
  goldValue: 45,
})
