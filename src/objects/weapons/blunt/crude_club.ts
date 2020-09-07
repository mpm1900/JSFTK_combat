import { WeaponT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { SMASH } from '../../skills/smash'
import { DAZE } from '../../skills/stun_attack'

export const CRUDE_CLUB = (): WeaponT => ({
  ...makeEntity(`Crude Club`),
  itemType: 'weapon',
  type: 'blunt',
  rarity: 'common',
  twoHand: false,
  attackType: 'melee',
  damage: { type: 'physical', damage: 12 },
  traits: [],
  skills: [SMASH, DAZE],
})
