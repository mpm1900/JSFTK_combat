import { createBreakableWeapon, createWeapon } from '..'
import {
  HEADSHOT,
  SHOT,
  GLASS_SHOT,
  FLURRY,
  PIN_DOWN,
  WITHERING_SHOT,
  STUN,
  WOUNDING_SHOT,
} from '../../../Skill/skills/bow'
import { tWeaponsByLevel } from '../type'

const type = 'bow'
export const RANGERS_BOW = () => ({
  ...createWeapon(type, 'starting', [SHOT, HEADSHOT], {}),
  name: `Ranger Bow`,
})
export const RUSTED_BOW = () =>
  createWeapon(type, 'rusted', [SHOT, HEADSHOT], {})
export const TOMB_BOW = () =>
  createWeapon(type, 'tomb', [SHOT, HEADSHOT, FLURRY], {})
export const BURRIED_BOW = () =>
  createWeapon(type, 'buried', [SHOT, FLURRY, PIN_DOWN], {})
export const WITHERING_BOW = () =>
  createBreakableWeapon(type, 'withering', [WITHERING_SHOT], {})
export const GLASS_BOW = () =>
  createBreakableWeapon(type, 'glass', [GLASS_SHOT], {})

export const IRON_BOW = () => createWeapon(type, 'iron', [SHOT, STUN], {})
export const STEEL_BOW = () =>
  createWeapon(type, 'steel', [SHOT, HEADSHOT, WOUNDING_SHOT], {})
export const STAINLESS_BOW = () =>
  createWeapon(type, 'stainless', [SHOT, FLURRY, PIN_DOWN], {})

export const ANCIENT_BOW = () =>
  createWeapon(type, 'ancient', [SHOT, FLURRY, WOUNDING_SHOT], {})
export const CRYSTAL_BOW = () =>
  createBreakableWeapon(type, 'crystal', [GLASS_SHOT], {})
export const ELEMENTAL_BOW = () => createWeapon(type, 'elemental', [SHOT], {})
export const CURSED_BOW = () => createWeapon(type, 'cursed', [SHOT], {})

export const SHARP_BOW = () =>
  createWeapon(type, 'sharp', [SHOT, HEADSHOT, WOUNDING_SHOT], {})
export const HARDENED_BOW = () =>
  createWeapon(type, 'hardened', [SHOT, FLURRY, PIN_DOWN], {})
export const ENGRAVED_BOW = () =>
  createWeapon(type, 'engraved', [SHOT, HEADSHOT, STUN, WOUNDING_SHOT], {})
export const ETHEREAL_BOW = () =>
  createBreakableWeapon(type, 'ethereal', [GLASS_SHOT], {})

export const EXQUISITE_BOW = () =>
  createWeapon(type, 'exquisite', [SHOT, HEADSHOT], {})
export const DIVINE_BOW = () =>
  createWeapon(type, 'divine', [SHOT, HEADSHOT], {})
export const ARCANE_BOW = () => createWeapon(type, 'arcane', [SHOT], {})
export const CELESTIAL_BOW = () => createWeapon(type, 'celestial', [SHOT], {})

export const BOWS: tWeaponsByLevel = {
  0: [RANGERS_BOW],
  1: [RUSTED_BOW, TOMB_BOW, BURRIED_BOW, WITHERING_BOW, GLASS_BOW],
  2: [IRON_BOW, STEEL_BOW, STAINLESS_BOW],
  3: [ANCIENT_BOW, CRYSTAL_BOW, ELEMENTAL_BOW, CURSED_BOW],
  4: [SHARP_BOW, HARDENED_BOW, ENGRAVED_BOW, ETHEREAL_BOW],
  5: [EXQUISITE_BOW, DIVINE_BOW, ARCANE_BOW, CELESTIAL_BOW],
}
