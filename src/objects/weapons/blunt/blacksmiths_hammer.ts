import { WeaponT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { SMASH } from '../../skills/smash'
import { SHOCKWAVE } from '../../skills/shockwave'

export const BLACKSMITHS_HAMMER = (): WeaponT => ({
  ...makeEntity(`Blacksmith's Hammer`),
  itemType: 'weapon',
  type: 'blunt',
  rarity: 'common',
  twoHand: false,
  attackType: 'melee',
  damage: { type: 'physical', damage: 10 },
  traits: [],
  skills: [SMASH, SHOCKWAVE],
})
