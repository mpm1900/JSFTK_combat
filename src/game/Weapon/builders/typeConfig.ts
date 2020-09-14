import { tWeaponTypeConfig } from './type'

export const DEFAULT_WEAPON_TYPE_CONFIG: tWeaponTypeConfig = {
  axe: {
    stat: 'strength',
    twoHand: true,
    range: 'melee',
    damageType: 'physical',
  },
  hammer: {
    stat: 'strength',
    twoHand: false,
    range: 'melee',
    damageType: 'physical',
  },
  sword: {
    stat: 'strength',
    twoHand: false,
    range: 'melee',
    damageType: 'physical',
  },
  greatsword: {
    stat: 'strength',
    twoHand: true,
    range: 'melee',
    damageType: 'physical',
  },
  bow: {
    stat: 'dexterity',
    twoHand: true,
    range: 'ranged',
    damageType: 'physical',
  },
  dagger: {
    stat: 'dexterity',
    twoHand: false,
    range: 'melee',
    damageType: 'physical',
  },
  scythe: {
    stat: 'dexterity',
    twoHand: true,
    range: 'melee',
    damageType: 'physical',
  },
  catalyst: {
    stat: 'intelligence',
    twoHand: true,
    range: 'ranged',
    damageType: 'magic',
  },
  chime: {
    stat: 'charisma',
    twoHand: true,
    range: 'ranged',
    damageType: 'magic',
  },
  pistol: {
    stat: 'charisma',
    twoHand: false,
    range: 'ranged',
    damageType: 'physical',
  },
  fist: {
    stat: 'vigor',
    twoHand: true,
    range: 'melee',
    damageType: 'physical',
  },
  enemy: {
    stat: 'vigor',
    twoHand: true,
    range: 'melee',
    damageType: 'physical',
  },
}
