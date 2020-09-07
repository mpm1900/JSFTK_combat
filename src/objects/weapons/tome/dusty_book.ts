import { WeaponT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { SURGE } from '../../skills/surge'
import { AREA_BLAST } from '../../skills/area_blast'
import { PROTECT } from '../../skills/protect'

export const DUSTY_BOOK = (): WeaponT => ({
  ...makeEntity(`Dusty Book`),
  itemType: 'weapon',
  type: 'tome',
  rarity: 'common',
  twoHand: true,
  attackType: 'ranged',
  damage: { type: 'magic', damage: 9 },
  traits: [],
  skills: [SURGE, AREA_BLAST, PROTECT],
})
