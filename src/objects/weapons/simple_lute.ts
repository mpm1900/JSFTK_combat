import { WeaponT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { ALTO } from '../skills/alto'
import { DAZZLE } from '../skills/Dazzle'

export const SIMPLE_LUTE: WeaponT = {
  ...makeEntity(`Simple Lute`),
  type: 'lute',
  rarity: 'common',
  twoHand: true,
  attackType: 'ranged',
  damage: { type: 'magic', damage: 6 },
  // TODO: Gold Multiplier
  traits: [],
  skills: [ALTO, DAZZLE],
}
