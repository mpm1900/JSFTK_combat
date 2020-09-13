import { tArmor } from '../../type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../../../Stats/constants'
import { TAUNT } from '../../../Skill/objects/taunt'

export const BONE_BUCKLER = (): tArmor => ({
  id: v4(),
  name: 'Bone Buckler',
  itemType: 'armor',
  resource: 'offhand',
  rarity: 'uncommon',
  type: 'shield',
  stat: 'vigor',
  stats: {
    ...ZERO_STATS,
    armor: 1,
    evasion: 4,
  },
  skills: [TAUNT],
  immunities: [],
  goldValue: 20,
})
