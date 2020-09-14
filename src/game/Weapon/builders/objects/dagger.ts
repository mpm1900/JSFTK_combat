import { createBreakableWeapon, createWeapon } from '..'
import {
  GLASS_STRIKE,
  LUNGE,
  SLASH,
  STAB,
  STRIKE,
  SWING,
  WITHERING_STRIKE,
} from '../../../Skill/skills/dagger'
import { tWeaponsByLevel } from '../type'

const type = 'dagger'
export const RUSTED_DAGGER = () =>
  createWeapon(type, 'rusted', [STRIKE, SWING], {})
export const TOMB_DAGGER = () => createWeapon(type, 'tomb', [SWING, LUNGE], {})
export const BURRIED_DAGGER = () =>
  createWeapon(type, 'burried', [STRIKE, STAB], {})
export const WITHERING_DAGGER = () =>
  createBreakableWeapon(type, 'withering', [WITHERING_STRIKE], {})
export const GLASS_DAGGER = () =>
  createBreakableWeapon(type, 'glass', [GLASS_STRIKE], {})

export const IRON_DAGGER = () =>
  createWeapon(type, 'iron', [STRIKE, LUNGE, STAB], {})
export const STEEL_DAGGER = () =>
  createWeapon(type, 'steel', [STRIKE, LUNGE, SLASH], {})
export const STAINLESS_DAGGER = () =>
  createWeapon(type, 'stainless', [STRIKE, LUNGE, SLASH], {})

export const ANCIENT_DAGGER = () =>
  createWeapon(type, 'ancient', [STRIKE, LUNGE, STAB], {})
export const CRYSTAL_DAGGER = () =>
  createBreakableWeapon(type, 'crystal', [GLASS_STRIKE], {})
export const ELEMENTAL_DAGGER = () =>
  createWeapon(type, 'elemental', [STRIKE, LUNGE, STAB], {})
export const CURSED_DAGGER = () =>
  createWeapon(type, 'cursed', [STRIKE, LUNGE, SLASH], {})

export const SHARP_DAGGER = () =>
  createWeapon(type, 'sharp', [STRIKE, LUNGE, STAB], {})
export const HARDENED_DAGGER = () =>
  createWeapon(type, 'hardened', [STRIKE, LUNGE, SLASH], {})
export const ENGRAVED_DAGGER = () =>
  createWeapon(type, 'engraved', [STRIKE, LUNGE, STAB], {})
export const ETHEREAL_DAGGER = () =>
  createBreakableWeapon(type, 'ethereal', [GLASS_STRIKE], {})

export const EXQUISITE_DAGGER = () =>
  createWeapon(type, 'exquisite', [STRIKE, LUNGE, SLASH], {})
export const DIVINE_DAGGER = () =>
  createWeapon(type, 'divine', [STRIKE, LUNGE, STAB], {})
export const ARCANE_DAGGER = () =>
  createWeapon(type, 'arcane', [STRIKE, LUNGE, SLASH], {})
export const CELESTIAL_DAGGER = () =>
  createBreakableWeapon(type, 'celestial', [STRIKE, LUNGE, STAB], {})

export const DAGGERS: tWeaponsByLevel = {
  0: [],
  1: [
    RUSTED_DAGGER,
    TOMB_DAGGER,
    BURRIED_DAGGER,
    WITHERING_DAGGER,
    GLASS_DAGGER,
  ],
  2: [IRON_DAGGER, STEEL_DAGGER, STAINLESS_DAGGER],
  3: [ANCIENT_DAGGER, CRYSTAL_DAGGER, ELEMENTAL_DAGGER, CURSED_DAGGER],
  4: [SHARP_DAGGER, HARDENED_DAGGER, ENGRAVED_DAGGER, ETHEREAL_DAGGER],
  5: [EXQUISITE_DAGGER, DIVINE_DAGGER, ARCANE_DAGGER, CELESTIAL_DAGGER],
}
