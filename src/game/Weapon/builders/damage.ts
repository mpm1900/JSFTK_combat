import { tWeaponClassDamageConfig, tWeaponTypeDamageConfig } from './type'

export const GLOBAL_DAMAGE_OFFSETS: tWeaponTypeDamageConfig = {
  axe: 0,
  hammer: 0,
  sword: 0,
  greatsword: 0,
  bow: 0,
  dagger: 0,
  scythe: 0,
  catalyst: 0,
  chime: 0,
  pistol: 0,
  fist: 0,
  enemy: 0,
}
export const WEAPON_DAMAGE_CONFIG: tWeaponClassDamageConfig = {
  starting: {
    axe: 11,
    hammer: 9,
    sword: 8,
    greatsword: 12,
    bow: 6,
    dagger: 5,
    scythe: 7,
    catalyst: 6,
    chime: 6,
    pistol: 5,
    fist: 0,
    enemy: 0,
  },
  // LEVEL 1 ccc ur
  rusted: {
    // higher damage than tomb, but worse skills
    axe: 13,
    hammer: 11,
    sword: 10,
    greatsword: 13,
    bow: 12,
    dagger: 7,
    scythe: 10,
    catalyst: 9,
    chime: 9,
    pistol: 7,
    fist: 0,
    enemy: 0,
  },
  tomb: {
    axe: 15,
    hammer: 12,
    sword: 12,
    greatsword: 15,
    bow: 13,
    dagger: 8,
    scythe: 12,
    catalyst: 12,
    chime: 12,
    pistol: 8,
    fist: 0,
    enemy: 0,
  },
  buried: {
    axe: 16,
    hammer: 13,
    sword: 12,
    greatsword: 16,
    bow: 14,
    dagger: 9,
    scythe: 13,
    catalyst: 13,
    chime: 13,
    pistol: 9,
    fist: 0,
    enemy: 0,
  },

  withering: {
    axe: 18,
    hammer: 15,
    sword: 15,
    greatsword: 18,
    bow: 17,
    dagger: 12,
    scythe: 15,
    catalyst: 16,
    chime: 16,
    pistol: 10,
    fist: 0,
    enemy: 0,
  },
  glass: {
    axe: 22,
    hammer: 18,
    sword: 18,
    greatsword: 22,
    bow: 21,
    dagger: 16,
    scythe: 21,
    catalyst: 21,
    chime: 21,
    pistol: 16,
    fist: 0,
    enemy: 0,
  },

  // LEVEL 2 ccc
  iron: {
    axe: 19,
    hammer: 16,
    sword: 16,
    greatsword: 20,
    bow: 18,
    dagger: 12,
    scythe: 16,
    catalyst: 16,
    chime: 16,
    pistol: 12,
    fist: 0,
    enemy: 0,
  },
  steel: {
    axe: 20,
    hammer: 17,
    sword: 17,
    greatsword: 20,
    bow: 19,
    dagger: 13,
    scythe: 17,
    catalyst: 17,
    chime: 17,
    pistol: 13,
    fist: 0,
    enemy: 0,
  },
  stainless: {
    axe: 21,
    hammer: 18,
    sword: 18,
    greatsword: 21,
    bow: 20,
    dagger: 14,
    scythe: 18,
    catalyst: 18,
    chime: 18,
    pistol: 14,
    fist: 0,
    enemy: 0,
  },

  // LEVEL 3 ur rr
  ancient: {
    axe: 24,
    hammer: 21,
    sword: 21,
    greatsword: 25,
    bow: 23,
    dagger: 17,
    scythe: 21,
    catalyst: 21,
    chime: 21,
    pistol: 17,
    fist: 0,
    enemy: 0,
  },
  crystal: {
    axe: 26,
    hammer: 23,
    sword: 23,
    greatsword: 27,
    bow: 25,
    dagger: 20,
    scythe: 23,
    catalyst: 23,
    chime: 23,
    pistol: 20,
    fist: 0,
    enemy: 0,
  },

  elemental: {
    axe: 24,
    hammer: 21,
    sword: 21,
    greatsword: 25,
    bow: 23,
    dagger: 17,
    scythe: 21,
    catalyst: 21,
    chime: 21,
    pistol: 17,
    fist: 0,
    enemy: 0,
  },
  cursed: {
    axe: 25,
    hammer: 22,
    sword: 22,
    greatsword: 26,
    bow: 24,
    dagger: 18,
    scythe: 22,
    catalyst: 22,
    chime: 22,
    pistol: 18,
    fist: 0,
    enemy: 0,
  },

  // LEVEL 4 cuu r
  sharp: {
    axe: 28,
    hammer: 25,
    sword: 25,
    greatsword: 29,
    bow: 26,
    dagger: 21,
    scythe: 25,
    catalyst: 26,
    chime: 26,
    pistol: 21,
    fist: 0,
    enemy: 0,
  },
  hardened: {
    axe: 30,
    hammer: 27,
    sword: 27,
    greatsword: 31,
    bow: 28,
    dagger: 23,
    scythe: 27,
    catalyst: 28,
    chime: 28,
    pistol: 23,
    fist: 0,
    enemy: 0,
  },
  engraved: {
    axe: 31,
    hammer: 28,
    sword: 28,
    greatsword: 32,
    bow: 29,
    dagger: 24,
    scythe: 28,
    catalyst: 29,
    chime: 29,
    pistol: 24,
    fist: 0,
    enemy: 0,
  },

  ethereal: {
    axe: 34,
    hammer: 32,
    sword: 32,
    greatsword: 35,
    bow: 33,
    dagger: 27,
    scythe: 31,
    catalyst: 32,
    chime: 32,
    pistol: 27,
    fist: 0,
    enemy: 0,
  },

  // LEVEL 5 ur mm
  exquisite: {
    axe: 33,
    hammer: 31,
    sword: 31,
    greatsword: 34,
    bow: 32,
    dagger: 26,
    scythe: 30,
    catalyst: 31,
    chime: 31,
    pistol: 26,
    fist: 0,
    enemy: 0,
  },
  divine: {
    axe: 35,
    hammer: 33,
    sword: 33,
    greatsword: 36,
    bow: 34,
    dagger: 28,
    scythe: 32,
    catalyst: 33,
    chime: 33,
    pistol: 28,
    fist: 0,
    enemy: 0,
  },
  arcane: {
    axe: 36,
    hammer: 33,
    sword: 33,
    greatsword: 37,
    bow: 35,
    dagger: 29,
    scythe: 33,
    catalyst: 34,
    chime: 34,
    pistol: 29,
    fist: 0,
    enemy: 0,
  },
  celestial: {
    axe: 38,
    hammer: 35,
    sword: 35,
    greatsword: 39,
    bow: 37,
    dagger: 31,
    scythe: 35,
    catalyst: 36,
    chime: 36,
    pistol: 31,
    fist: 0,
    enemy: 0,
  },

  // LEVEL 6
  mythic: {
    axe: 40,
    hammer: 37,
    sword: 37,
    greatsword: 41,
    bow: 39,
    dagger: 33,
    scythe: 37,
    catalyst: 38,
    chime: 38,
    pistol: 33,
    fist: 0,
    enemy: 0,
  },
  unique: {
    axe: 40,
    hammer: 37,
    sword: 37,
    greatsword: 41,
    bow: 39,
    dagger: 33,
    scythe: 37,
    catalyst: 38,
    chime: 38,
    pistol: 33,
    fist: 0,
    enemy: 0,
  },
}
