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
  buried: 30,
  withering: 40,
  glass: 60,

  iron: 75,
  steel: 80,
  stainless: 85,

  ancient: 100,
  crystal: 150,
  elemental: 155,
  cursed: 155,

  sharp: 200,
  hardened: 225,
  engraved: 250,
  ethereal: 265,

  exquisite: 300,
  divine: 320,
  arcane: 340,
  celestial: 350,

  mythic: 400,
  unique: 400,
}
