import { WeaponT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { ZERO_TRAIT } from '../../Traits'
import { ZERO_STATS } from '../../Stats'
import { PIERCING_BLOW } from '../../skills/piercing_blow'

export const WAR_PICK = (): WeaponT => ({
  ...makeEntity(`War Pick`),
  itemType: 'weapon',
  type: 'blunt',
  rarity: 'common',
  twoHand: false,
  attackType: 'melee',
  damage: { type: 'physical', damage: 14 },
  traits: [
    {
      ...ZERO_TRAIT,
      stats: {
        ...ZERO_STATS,
        agility: 5,
        criticalChance: 5,
      },
    },
  ],
  skills: [PIERCING_BLOW],
})
