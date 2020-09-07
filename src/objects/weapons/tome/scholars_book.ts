import { WeaponT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { SURGE } from '../../skills/surge'
import { AREA_BLAST } from '../../skills/area_blast'
import { TIME_JUMP } from '../../skills/time_jump'

export const SCHOLARS_BOOK = (): WeaponT => ({
  ...makeEntity(`Scholar's Book`),
  itemType: 'weapon',
  type: 'tome',
  rarity: 'common',
  twoHand: true,
  attackType: 'ranged',
  damage: { type: 'magic', damage: 6 },
  traits: [],
  skills: [SURGE, AREA_BLAST],
})
