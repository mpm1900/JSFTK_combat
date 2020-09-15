import { createBreakableWeapon, createWeapon } from '..'
import {
  ARMOR_UP,
  CLEAVE,
  EVADE_UP,
  FLURRY,
  GLASS_SWING,
  SLASH,
  SLICE,
  SWING,
  THRUST,
  WITHERING_SWING,
} from '../../../Skill/skills/scythe'
import { tWeapon } from '../../type'
import { tWeaponsByLevel } from '../type'

const type = 'scythe'
export const FARMER_SCYTHE = (): tWeapon => ({
  ...createWeapon(type, 'starting', [SLICE], {}),
  name: `Farmer Scythe`,
})
export const RUSTED_SCYTHE = () => createWeapon(type, 'rusted', [THRUST], {})
export const TOMB_SCYTHE = () => createWeapon(type, 'tomb', [SWING, FLURRY], {})
export const BURRIED_SCYTHE = () =>
  createWeapon(type, 'buried', [SWING, SLICE], {})
export const WITHERING_SCYTHE = () =>
  createBreakableWeapon(type, 'withering', [WITHERING_SWING], {})
export const GLASS_SCYTHE = () =>
  createBreakableWeapon(type, 'glass', [GLASS_SWING], {})

export const IRON_SCYTHE = () =>
  createWeapon(type, 'iron', [THRUST, ARMOR_UP, EVADE_UP], {})
export const STEEL_SCYTHE = () =>
  createWeapon(type, 'steel', [THRUST, SLASH], {})
export const STAINLESS_SCYTHE = () =>
  createWeapon(type, 'stainless', [THRUST, SLICE], {})

export const ANCIENT_SCYTHE = () =>
  createWeapon(type, 'ancient', [SWING, CLEAVE, ARMOR_UP], {})
export const CRYSTAL_SCYTHE = () =>
  createBreakableWeapon(type, 'crystal', [GLASS_SWING], {})
export const ELEMENTAL_SCYTHE = () =>
  createWeapon(type, 'elemental', [THRUST], {})
export const CURSED_SCYTHE = () => createWeapon(type, 'cursed', [THRUST], {})

export const SHARP_SCYTHE = () =>
  createWeapon(type, 'sharp', [THRUST, SLICE, SLASH], {})
export const HARDENED_SCYTHE = () =>
  createWeapon(type, 'hardened', [THRUST, FLURRY, ARMOR_UP, EVADE_UP], {})
export const ENGRAVED_SCYTHE = () =>
  createWeapon(type, 'engraved', [THRUST, FLURRY, SLASH, CLEAVE], {})
export const ETHEREAL_SCYTHE = () =>
  createBreakableWeapon(type, 'ethereal', [GLASS_SWING], {})

export const EXQUISITE_SCYTHE = () =>
  createWeapon(type, 'exquisite', [THRUST, SLICE, SLASH], {})
export const DIVINE_SCYTHE = () =>
  createWeapon(type, 'divine', [THRUST, SLICE, ARMOR_UP, EVADE_UP], {})
export const ARCANE_SCYTHE = () => createWeapon(type, 'arcane', [THRUST], {})
export const CELESTIAL_SCYTHE = () =>
  createBreakableWeapon(type, 'celestial', [GLASS_SWING], {})

export const SCYTHES: tWeaponsByLevel = {
  0: [],
  1: [
    RUSTED_SCYTHE,
    TOMB_SCYTHE,
    BURRIED_SCYTHE,
    WITHERING_SCYTHE,
    GLASS_SCYTHE,
  ],
  2: [IRON_SCYTHE, STEEL_SCYTHE, STAINLESS_SCYTHE],
  3: [ANCIENT_SCYTHE, CRYSTAL_SCYTHE, ELEMENTAL_SCYTHE, CURSED_SCYTHE],
  4: [SHARP_SCYTHE, HARDENED_SCYTHE, ENGRAVED_SCYTHE, ETHEREAL_SCYTHE],
  5: [EXQUISITE_SCYTHE, DIVINE_SCYTHE, ARCANE_SCYTHE, CELESTIAL_SCYTHE],
}
