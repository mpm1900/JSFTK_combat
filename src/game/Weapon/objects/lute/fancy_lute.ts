import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { ALTO } from '../../../Skill/objects/alto'
import { DAZZLE } from '../../../Skill/objects/dazzle'
import { PRESTO } from '../../../Skill/objects/presto'

export const FANCY_LUTE = (): tWeapon => ({
  id: v4(),
  name: `Fancy Lute`,
  itemType: 'weapon',
  type: 'lute',
  rarity: 'common',
  stat: 'charisma',
  twoHand: true,
  breakable: false,
  damage: { type: 'magic', range: 'ranged', value: 12 },
  stats: {
    ...ZERO_STATS,
    goldModifier: 15,
  },
  skills: [ALTO, PRESTO, DAZZLE],
  immunities: [],
})
