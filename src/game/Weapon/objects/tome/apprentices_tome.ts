import { tWeapon } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { SURGE } from '../../../Skill/objects/surge'
import { AREA_BLAST } from '../../../Skill/objects/area_blast'
import { PROTECT } from '../../../Skill/objects/protect'
import { TIME_JUMP } from '../../../Skill/objects/time_jump'

export const APPRENTICES_TOME = (): tWeapon => ({
  id: v4(),
  name: `Apprentice's Tome`,
  itemType: 'weapon',
  type: 'tome',
  rarity: 'common',
  stat: 'intelligence',
  twoHand: true,
  breakable: false,
  damage: { type: 'magic', range: 'ranged', value: 13 },
  stats: {
    ...ZERO_STATS,
  },
  skills: [SURGE, AREA_BLAST, PROTECT, TIME_JUMP],
  immunities: [],
})
