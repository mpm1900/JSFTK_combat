import { WeaponT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { SMASH } from '../../skills/smash'
import { STUN_ATTACK } from '../../skills/stun_attack'

export const MACE = (): WeaponT => ({
  ...makeEntity(`Mace`),
  itemType: 'weapon',
  type: 'blunt',
  rarity: 'common',
  twoHand: false,
  attackType: 'melee',
  damage: { type: 'physical', damage: 21 },
  traits: [],
  skills: [SMASH, STUN_ATTACK],
})
