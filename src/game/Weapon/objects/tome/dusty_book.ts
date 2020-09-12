import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { SURGE } from '../../../Skill/objects/surge'
import { AREA_BLAST } from '../../../Skill/objects/area_blast'
import { PROTECT } from '../../../Skill/objects/protect'

export const DUSTY_BOOK = (): tWeapon => ({
  id: v4(),
  name: `Dusty Book`,
  itemType: 'weapon',
  type: 'tome',
  rarity: 'common',
  stat: 'intelligence',
  twoHand: true,
  breakable: false,
  damage: { type: 'magic', range: 'ranged', value: 9 },
  stats: { ...ZERO_STATS },
  skills: [SURGE, AREA_BLAST, PROTECT],
  immunities: [],
  goldValue: 30,
})
