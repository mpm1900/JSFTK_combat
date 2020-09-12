import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { RITARDANDO } from '../../../Skill/objects/ritardando'
import { SYMPHONY } from '../../../Skill/objects/symphony'
import { RUBATO } from '../../../Skill/objects/rubato'

export const ARCHLUTE = (): tWeapon => ({
  id: v4(),
  name: `Archlute`,
  itemType: 'weapon',
  type: 'lute',
  rarity: 'common',
  stat: 'charisma',
  twoHand: true,
  breakable: false,
  damage: { type: 'magic', range: 'ranged', value: 13 },
  stats: {
    ...ZERO_STATS,
    goldModifier: 10,
  },
  skills: [RITARDANDO, SYMPHONY, RUBATO],
  immunities: [],
  goldValue: 45,
})
