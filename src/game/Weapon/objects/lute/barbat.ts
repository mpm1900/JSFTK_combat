import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { RITARDANDO } from '../../../Skill/objects/ritardando'
import { SYMPHONY } from '../../../Skill/objects/symphony'
import { DAZZLE } from '../../../Skill/objects/dazzle'

export const BARBAT = (): tWeapon => ({
  id: v4(),
  name: `Barbat`,
  itemType: 'weapon',
  type: 'lute',
  rarity: 'common',
  stat: 'charisma',
  twoHand: true,
  breakable: false,
  damage: { type: 'magic', range: 'ranged', value: 9 },
  stats: {
    ...ZERO_STATS,
    goldModifier: 10,
  },
  skills: [RITARDANDO, SYMPHONY, DAZZLE],
  immunities: [],
  goldValue: 35,
})
