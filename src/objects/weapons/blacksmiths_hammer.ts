import { WeaponT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { SMASH } from '../skills/smash'
import { SHOCKWAVE } from '../skills/shockwave'
import { ZERO_STATS } from '../Stats'

export const BLACKSMITHS_HAMMER: WeaponT = {
  ...makeEntity(`Blacksmith's Hammer`),
  type: 'hammer',
  rarity: 'common',
  twoHand: false,
  attackType: 'melee',
  damage: { type: 'physical', damage: 10 },
  traits: [],
  skills: [SMASH, SHOCKWAVE],
}
