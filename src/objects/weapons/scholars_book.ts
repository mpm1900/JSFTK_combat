import { WeaponT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { SURGE } from '../skills/surge'
import { AREA_BLAST } from '../skills/area_blast'
import { DAZZLE } from '../skills/Dazzle'

export const SCHOLARS_BOOK: WeaponT = {
  ...makeEntity(`Scholar's Book`),
  type: 'tome',
  rarity: 'common',
  twoHand: true,
  attackType: 'ranged',
  damage: { type: 'magic', damage: 6 },
  traits: [],
  skills: [SURGE, AREA_BLAST, DAZZLE],
}
