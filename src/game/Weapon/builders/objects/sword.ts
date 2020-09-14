import { createBreakableWeapon, createWeapon } from '..'
import {
  LUNGE,
  FLURRY,
  GLASS_STRIKE,
  SLASH,
  STAB,
  SWING,
  STRIKE,
  WITHERING_STRIKE,
} from '../../../Skill/skills/sword'
import { tWeaponsByLevel } from '../type'

const type = 'sword'
export const RUSTED_SWORD = () => createWeapon(type, 'rusted', [STRIKE], {})
export const TOMB_SWORD = () => createWeapon(type, 'tomb', [SWING, FLURRY], {})
export const BURRIED_SWORD = () =>
  createWeapon(type, 'burried', [SWING, STAB], {})
export const WITHERING_SWORD = () =>
  createBreakableWeapon(type, 'withering', [WITHERING_STRIKE], {})
export const GLASS_SWORD = () =>
  createBreakableWeapon(type, 'glass', [GLASS_STRIKE], {})

export const IRON_SWORD = () => createWeapon(type, 'iron', [STRIKE, LUNGE], {})
export const STEEL_SWORD = () =>
  createWeapon(type, 'steel', [STRIKE, SLASH], {})
export const STAINLESS_SWORD = () =>
  createWeapon(type, 'stainless', [STRIKE, STAB], {})

export const ANCIENT_SWORD = () =>
  createWeapon(type, 'ancient', [STRIKE, LUNGE], {})
export const CRYSTAL_SWORD = () =>
  createBreakableWeapon(type, 'crystal', [GLASS_STRIKE], {})
export const ELEMENTAL_SWORD = () =>
  createWeapon(type, 'elemental', [STRIKE], {})
export const CURSED_SWORD = () => createWeapon(type, 'cursed', [STRIKE], {})

export const SHARP_SWORD = () =>
  createWeapon(type, 'sharp', [STRIKE, STAB, SLASH], {})
export const HARDENED_SWORD = () =>
  createWeapon(type, 'hardened', [STRIKE, FLURRY, LUNGE], {})
export const ENGRAVED_SWORD = () =>
  createWeapon(type, 'engraved', [STRIKE, FLURRY, SLASH, LUNGE], {})
export const ETHEREAL_SWORD = () =>
  createBreakableWeapon(type, 'ethereal', [GLASS_STRIKE], {})

export const EXQUISITE_SWORD = () =>
  createWeapon(type, 'exquisite', [STRIKE, STAB, SLASH], {})
export const DIVINE_SWORD = () =>
  createWeapon(type, 'divine', [STRIKE, STAB, SLASH], {})
export const ARCANE_SWORD = () => createWeapon(type, 'arcane', [STRIKE], {})
export const CELESTIAL_SWORD = () =>
  createBreakableWeapon(type, 'celestial', [GLASS_STRIKE], {})

export const SWORDS: tWeaponsByLevel = {
  0: [],
  1: [RUSTED_SWORD, TOMB_SWORD, BURRIED_SWORD, WITHERING_SWORD, GLASS_SWORD],
  2: [IRON_SWORD, STEEL_SWORD, STAINLESS_SWORD],
  3: [ANCIENT_SWORD, CRYSTAL_SWORD, ELEMENTAL_SWORD, CURSED_SWORD],
  4: [SHARP_SWORD, HARDENED_SWORD, ENGRAVED_SWORD, ETHEREAL_SWORD],
  5: [EXQUISITE_SWORD, DIVINE_SWORD, ARCANE_SWORD, CELESTIAL_SWORD],
}
