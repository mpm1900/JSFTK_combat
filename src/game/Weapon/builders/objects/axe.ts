import { createBreakableWeapon, createWeapon } from '..'
import {
  AXE_SPIN,
  CHOP,
  CLEAVE,
  FLURRY,
  GLASS_SWING,
  SLASH,
  SLICE,
  STUN,
  SWING,
  WITHERING_SWING,
} from '../../../Skill/skills/axe'
import { tWeapon } from '../../type'
import { tWeaponsByLevel } from '../type'

const type = 'axe'
export const EXECUTIONER_AXE = (): tWeapon => ({
  ...createWeapon(type, 'starting', [CHOP, AXE_SPIN], {}),
  name: `Executioner Axe`,
})

export const RUSTED_AXE = () => createWeapon(type, 'rusted', [CHOP, SWING], {})
export const TOMB_AXE = () => createWeapon(type, 'tomb', [SWING, FLURRY], {})
export const BURRIED_AXE = () =>
  createWeapon(type, 'buried', [CHOP, FLURRY, SLICE], {})
export const WITHERING_AXE = () =>
  createBreakableWeapon(type, 'withering', [WITHERING_SWING], {})
export const GLASS_AXE = () =>
  createBreakableWeapon(type, 'glass', [GLASS_SWING], {})

export const IRON_AXE = () => createWeapon(type, 'iron', [CHOP, STUN], {})
export const STEEL_AXE = () =>
  createWeapon(type, 'steel', [CHOP, SLICE, CLEAVE], {})
export const STAINLESS_AXE = () =>
  createWeapon(type, 'stainless', [SLICE, CLEAVE, SLASH], {})

export const ANCIENT_AXE = () =>
  createWeapon(type, 'ancient', [SWING, CLEAVE], {})
export const CRYSTAL_AXE = () =>
  createWeapon(type, 'crystal', [GLASS_SWING], {})
export const ELEMENTAL_AXE = () => createWeapon(type, 'elemental', [CHOP], {})
export const CURSED_AXE = () => createWeapon(type, 'cursed', [CHOP], {})

export const SHARP_AXE = () =>
  createWeapon(type, 'sharp', [SLICE, SLASH, AXE_SPIN], {})
export const HARDENED_AXE = () =>
  createWeapon(type, 'hardened', [SLICE, SLASH, STUN], {})
export const ENGRAVED_AXE = () =>
  createWeapon(type, 'engraved', [SLICE, SLASH, FLURRY], {})
export const ETHEREAL_AXE = () =>
  createBreakableWeapon(type, 'ethereal', [GLASS_SWING], {})

export const EXQUISITE_AXE = () =>
  createWeapon(type, 'exquisite', [SLICE, SLASH, CLEAVE], {})
export const DIVINE_AXE = () =>
  createWeapon(type, 'divine', [SLICE, SLICE, STUN], {})
export const ARCANE_AXE = () => createWeapon(type, 'arcane', [CHOP], {})
export const CELESTIAL_AXE = () =>
  createBreakableWeapon(type, 'celestial', [GLASS_SWING], {})

export const AXES: tWeaponsByLevel = {
  0: [EXECUTIONER_AXE],
  1: [RUSTED_AXE, TOMB_AXE, BURRIED_AXE, WITHERING_AXE, GLASS_AXE],
  2: [IRON_AXE, STEEL_AXE, STAINLESS_AXE],
  3: [ANCIENT_AXE, CRYSTAL_AXE, ELEMENTAL_AXE, CURSED_AXE],
  4: [SHARP_AXE, HARDENED_AXE, ENGRAVED_AXE, ETHEREAL_AXE],
  5: [EXQUISITE_AXE, DIVINE_AXE, ARCANE_AXE, CELESTIAL_AXE],
}
