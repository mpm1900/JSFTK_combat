import { tWeaponType } from '../type'
import { tWeaponClass } from './type'

export const BASE_WEAPON_TYPES_GOLD: Record<tWeaponType, number> = {
  axe: 30,
  bow: 30,
  catalyst: 30,
  chime: 30,
  dagger: 10,
  greatsword: 35,
  hammer: 25,
  pistol: 15,
  scythe: 30,
  sword: 25,
  fist: 0,
  enemy: 0,
}

export const WEAPON_CLASS_GOLD_OFFSETS: Record<tWeaponClass, number> = {
  starting: -20,
  rusted: 0,
  tomb: 5,
  burried: 10,
  withering: 30,
  glass: 40,

  iron: 25,
  steel: 30,
  stainless: 35,

  ancient: 40,
  crystal: 50,
  elemental: 55,
  cursed: 55,

  sharp: 50,
  hardened: 55,
  engraved: 60,
  ethereal: 65,

  exquisite: 80,
  divine: 90,
  arcane: 100,
  celestial: 120,

  mythic: 150,
  unique: 150,
}
