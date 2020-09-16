import { tWeaponType } from '../type'
import { tWeaponClass } from './type'

export const BASE_WEAPON_TYPES_GOLD: Record<tWeaponType, number> = {
  axe: 30,
  bow: 35,
  catalyst: 30,
  chime: 30,
  dagger: 10,
  greatsword: 40,
  hammer: 25,
  pistol: 15,
  scythe: 35,
  sword: 25,
  fist: 0,
  enemy: 0,
}

export const WEAPON_CLASS_GOLD_OFFSETS: Record<tWeaponClass, number> = {
  starting: -20,
  rusted: 0,
  tomb: 5,
  buried: 10,
  withering: 30,
  glass: 40,

  iron: 25,
  steel: 30,
  stainless: 35,

  ancient: 40,
  crystal: 50,
  elemental: 55,
  cursed: 55,

  sharp: 80,
  hardened: 85,
  engraved: 90,
  ethereal: 95,

  exquisite: 100,
  divine: 120,
  arcane: 140,
  celestial: 150,

  mythic: 200,
  unique: 200,
}
