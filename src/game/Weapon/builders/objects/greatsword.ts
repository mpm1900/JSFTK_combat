import { createBreakableWeapon, createWeapon } from '..'
import {
  FLURRY,
  STRIKE,
  LUNGE,
  WIDE_SWING,
  GLASS_STRIKE,
  WITHERING_STRIKE,
  SLASH,
  SLICE,
  STUN,
  SWING,
} from '../../../Skill/skills/greatsword'
import { tWeaponsByLevel } from '../type'

const type = 'greatsword'
export const RUSTED_GREATSWORD = () =>
  createWeapon(type, 'rusted', [STRIKE], {})
export const TOMB_GREATSWORD = () =>
  createWeapon(type, 'tomb', [SWING, FLURRY], {})
export const BURRIED_GREATSWORD = () =>
  createWeapon(type, 'burried', [STRIKE, FLURRY, SLICE], {})
export const WITHERING_GREATSWORD = () =>
  createBreakableWeapon(type, 'withering', [WITHERING_STRIKE], {})
export const GLASS_GREATSWORD = () =>
  createBreakableWeapon(type, 'glass', [GLASS_STRIKE], {})

export const IRON_GREATSWORD = () =>
  createWeapon(type, 'iron', [STRIKE, STUN], {})
export const STEEL_GREATSWORD = () =>
  createWeapon(type, 'steel', [STRIKE, SLICE, LUNGE], {})
export const STAINLESS_GREATSWORD = () =>
  createWeapon(type, 'stainless', [SLICE, LUNGE, SLASH], {})

export const ANCIENT_GREATSWORD = () =>
  createWeapon(type, 'ancient', [SWING, LUNGE, WIDE_SWING], {})
export const CRYSTAL_GREATSWORD = () =>
  createBreakableWeapon(type, 'crystal', [GLASS_STRIKE], {})
export const ELEMENTAL_GREATSWORD = () =>
  createWeapon(type, 'elemental', [STRIKE], {})
export const CURSED_GREATSWORD = () =>
  createWeapon(type, 'cursed', [STRIKE], {})

export const SHARP_GREATSWORD = () =>
  createWeapon(type, 'sharp', [SLICE, SLASH, WIDE_SWING], {})
export const HARDENED_GREATSWORD = () =>
  createWeapon(type, 'hardened', [SLICE, SLICE, STUN], {})
export const ENGRAVED_GREATSWORD = () =>
  createWeapon(type, 'engraved', [SLICE, SLASH, FLURRY], {})
export const ETHEREAL_GREATSWORD = () =>
  createBreakableWeapon(type, 'ethereal', [GLASS_STRIKE], {})

export const EXQUISITE_GREATSWORD = () =>
  createWeapon(type, 'exquisite', [SLICE, SLASH, LUNGE], {})
export const DIVINE_GREATSWORD = () => createWeapon(type, 'divine', [], {})
export const ARCANE_GREATSWORD = () =>
  createWeapon(type, 'arcane', [STRIKE], {})
export const CELESTIAL_GREATSWORD = () =>
  createBreakableWeapon(type, 'celestial', [GLASS_STRIKE], {})

export const GREATSWORDS: tWeaponsByLevel = {
  0: [],
  1: [
    RUSTED_GREATSWORD,
    TOMB_GREATSWORD,
    BURRIED_GREATSWORD,
    WITHERING_GREATSWORD,
    GLASS_GREATSWORD,
  ],
  2: [IRON_GREATSWORD, STEEL_GREATSWORD, STAINLESS_GREATSWORD],
  3: [
    ANCIENT_GREATSWORD,
    CRYSTAL_GREATSWORD,
    ELEMENTAL_GREATSWORD,
    CURSED_GREATSWORD,
  ],
  4: [
    SHARP_GREATSWORD,
    HARDENED_GREATSWORD,
    ENGRAVED_GREATSWORD,
    ETHEREAL_GREATSWORD,
  ],
  5: [
    EXQUISITE_GREATSWORD,
    DIVINE_GREATSWORD,
    ARCANE_GREATSWORD,
    CELESTIAL_GREATSWORD,
  ],
}
