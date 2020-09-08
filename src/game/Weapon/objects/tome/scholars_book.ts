import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { SURGE } from '../../../Skill/objects/surge'
import { AREA_BLAST } from '../../../Skill/objects/area_blast'

export const SCHOLARS_BOOK = (): tWeapon => ({
  id: v4(),
  name: `Scholar's Book`,
  itemType: 'weapon',
  type: 'tome',
  rarity: 'common',
  stat: 'intelligence',
  twoHand: true,
  breakable: false,
  damage: { type: 'magic', range: 'ranged', value: 6 },
  stats: { ...ZERO_STATS },
  skills: [SURGE, AREA_BLAST],
  immunities: [],
})
