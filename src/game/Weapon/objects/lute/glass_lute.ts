import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { GLASS_ALTO } from '../../../Skill/objects/alto'

export const GLASS_LUTE = (): tWeapon => ({
  id: v4(),
  name: `Glass Lute`,
  itemType: 'weapon',
  type: 'lute',
  rarity: 'rare',
  stat: 'charisma',
  twoHand: true,
  breakable: true,
  damage: { type: 'magic', range: 'ranged', value: 20 },
  stats: {
    ...ZERO_STATS,
    goldModifier: 20,
  },
  skills: [GLASS_ALTO],
  immunities: [],
  goldValue: 40,
})
