import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { ALTO } from '../../../Skill/objects/alto'
import { DAZZLE } from '../../../Skill/objects/dazzle'

export const DECENT_LUTE = (): tWeapon => ({
  id: v4(),
  name: `Decent Lute`,
  itemType: 'weapon',
  type: 'lute',
  rarity: 'common',
  stat: 'charisma',
  twoHand: true,
  breakable: false,
  damage: { type: 'magic', range: 'ranged', value: 8 },
  stats: {
    ...ZERO_STATS,
    goldModifier: 10,
  },
  skills: [ALTO, DAZZLE],
  immunities: [],
})
