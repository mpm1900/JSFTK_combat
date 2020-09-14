import { createBreakableWeapon, createWeapon } from '..'
import { STAB } from '../../../Skill/enemy/stab'
import {
  CRUSH,
  EARTHQUAKE,
  GLASS_SMASH,
  RIPPLE,
  SMASH,
  WITHERING_SMASH,
  STUN,
} from '../../../Skill/skills/blunt'
import { tWeaponsByLevel } from '../type'

const type = 'hammer'
export const RUSTED_HAMMER = () =>
  createWeapon(type, 'rusted', [SMASH, RIPPLE], {})
export const TOMB_HAMMER = () =>
  createWeapon(type, 'tomb', [SMASH, EARTHQUAKE], {})
export const BURRIED_HAMMER = () =>
  createWeapon(type, 'burried', [SMASH, STAB], {})
export const WITHERING_HAMMER = () =>
  createBreakableWeapon(type, 'withering', [WITHERING_SMASH], {})
export const GLASS_HAMMER = () =>
  createBreakableWeapon(type, 'glass', [GLASS_SMASH], {})

export const IRON_HAMMER = () => createWeapon(type, 'iron', [SMASH, STUN], {})
export const STEEL_HAMMER = () =>
  createWeapon(type, 'steel', [SMASH, EARTHQUAKE, RIPPLE], {})
export const STAINLESS_HAMMER = () =>
  createWeapon(type, 'stainless', [SMASH, CRUSH, RIPPLE], {})

export const ANCIENT_HAMMER = () =>
  createWeapon(type, 'ancient', [SMASH, STUN], {})
export const CRYSTAL_HAMMER = () =>
  createBreakableWeapon(type, 'crystal', [GLASS_SMASH], {})
export const ELEMENTAL_HAMMER = () =>
  createWeapon(type, 'elemental', [SMASH], {})
export const CURSED_HAMMER = () => createWeapon(type, 'cursed', [SMASH], {})

export const SHARP_HAMMER = () =>
  createWeapon(type, 'sharp', [SMASH, STUN, CRUSH], {})
export const HARDENED_HAMMER = () =>
  createWeapon(type, 'hardened', [SMASH, CRUSH, EARTHQUAKE, RIPPLE], {})
export const ENGRAVED_HAMMER = () => createWeapon(type, 'engraved', [], {})
export const ETHEREAL_HAMMER = () =>
  createBreakableWeapon(type, 'ethereal', [GLASS_SMASH], {})

export const EXQUISITE_HAMMER = () =>
  createWeapon(type, 'exquisite', [SMASH], {})
export const DIVINE_HAMMER = () => createWeapon(type, 'divine', [SMASH], {})
export const ARCANE_HAMMER = () => createWeapon(type, 'arcane', [SMASH], {})
export const CELESTIAL_HAMMER = () =>
  createBreakableWeapon(type, 'celestial', [SMASH], {})

export const HAMMERS: tWeaponsByLevel = {
  0: [],
  1: [
    RUSTED_HAMMER,
    TOMB_HAMMER,
    BURRIED_HAMMER,
    WITHERING_HAMMER,
    GLASS_HAMMER,
  ],
  2: [IRON_HAMMER, STEEL_HAMMER, STAINLESS_HAMMER],
  3: [ANCIENT_HAMMER, CRYSTAL_HAMMER, ELEMENTAL_HAMMER, CURSED_HAMMER],
  4: [SHARP_HAMMER, HARDENED_HAMMER, ENGRAVED_HAMMER, ETHEREAL_HAMMER],
  5: [EXQUISITE_HAMMER, DIVINE_HAMMER, ARCANE_HAMMER, CELESTIAL_HAMMER],
}
