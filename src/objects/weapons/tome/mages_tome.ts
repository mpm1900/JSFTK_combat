import { WeaponT } from '../../../types'
import { SURGE } from '../../skills/surge'
import { AREA_BLAST } from '../../skills/area_blast'
import { PROTECT } from '../../skills/protect'
import { makeEntity } from '../../../functions/Entity'
import { TIME_JUMP } from '../../skills/time_jump'

export const MAGES_TOME = (): WeaponT => ({
  ...makeEntity(`Mage's Tome`),
  itemType: 'weapon',
  type: 'tome',
  rarity: 'common',
  twoHand: true,
  attackType: 'ranged',
  damage: { type: 'magic', damage: 18 },
  traits: [],
  skills: [SURGE, AREA_BLAST, PROTECT, TIME_JUMP],
})
