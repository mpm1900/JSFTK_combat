import { createBreakableWeapon, createWeapon } from '..'
import {
  ARCANE,
  BLAST,
  ENFLAME,
  ENGULF,
  GLASS_BLAST,
  NOVA,
  PROTECT,
  STUN,
  TIME_JUMP,
} from '../../../Skill/skills/catalyst'
import { tWeaponsByLevel } from '../type'

const type = 'catalyst'
export const STUDENTS_CATALYST = () => ({
  ...createWeapon(type, 'starting', [ARCANE, NOVA], {}),
  name: `Student Catalyst`,
})
export const RUSTED_CATALYST = () =>
  createWeapon(type, 'rusted', [BLAST, ARCANE], {})
export const TOMB_CATALYST = () =>
  createWeapon(type, 'tomb', [BLAST, ARCANE, NOVA], {})
export const BURRIED_CATALYST = () =>
  createWeapon(type, 'burried', [BLAST, ARCANE, PROTECT], {})
export const WITHERING_CATALYST = () =>
  createBreakableWeapon(type, 'withering', [BLAST], {})
export const GLASS_CATALYST = () =>
  createBreakableWeapon(type, 'glass', [GLASS_BLAST], {})

export const IRON_CATALYST = () =>
  createWeapon(type, 'iron', [ARCANE, NOVA, STUN], {})
export const STEEL_CATALYST = () =>
  createWeapon(type, 'steel', [ARCANE, NOVA, PROTECT, TIME_JUMP], {})
export const STAINLESS_CATALYST = () =>
  createWeapon(type, 'stainless', [BLAST, ARCANE, NOVA, PROTECT], {})

export const ANCIENT_CATALYST = () =>
  createWeapon(type, 'ancient', [ARCANE, NOVA, PROTECT, TIME_JUMP], {})
export const CRYSTAL_CATALYST = () =>
  createBreakableWeapon(type, 'crystal', [GLASS_BLAST], {})
export const ELEMENTAL_CATALYST = () =>
  createWeapon(type, 'elemental', [ARCANE, ENFLAME, ENGULF], {})
export const CURSED_CATALYST = () => createWeapon(type, 'cursed', [ARCANE], {})

export const SHARP_CATALYST = () => createWeapon(type, 'sharp', [], {})
export const HARDENED_CATALYST = () =>
  createWeapon(type, 'hardened', [ARCANE, NOVA, PROTECT, TIME_JUMP], {})
export const ENGRAVED_CATALYST = () =>
  createWeapon(type, 'engraved', [ARCANE, NOVA, PROTECT, TIME_JUMP], {})
export const ETHEREAL_CATALYST = () =>
  createBreakableWeapon(type, 'ethereal', [GLASS_BLAST], {})

export const EXQUISITE_CATALYST = () =>
  createWeapon(type, 'exquisite', [ARCANE, NOVA, PROTECT, TIME_JUMP], {})
export const DIVINE_CATALYST = () =>
  createWeapon(type, 'divine', [ARCANE, NOVA, PROTECT, TIME_JUMP], {})
export const ARCANE_CATALYST = () =>
  createWeapon(type, 'arcane', [ARCANE, NOVA, PROTECT, TIME_JUMP], {})
export const CELESTIAL_CATALYST = () =>
  createBreakableWeapon(
    type,
    'celestial',
    [ARCANE, NOVA, PROTECT, TIME_JUMP],
    {},
  )

export const CATALYSTS: tWeaponsByLevel = {
  0: [STUDENTS_CATALYST],
  1: [
    RUSTED_CATALYST,
    TOMB_CATALYST,
    BURRIED_CATALYST,
    WITHERING_CATALYST,
    GLASS_CATALYST,
  ],
  2: [IRON_CATALYST, STEEL_CATALYST, STAINLESS_CATALYST],
  3: [ANCIENT_CATALYST, CRYSTAL_CATALYST, ELEMENTAL_CATALYST, CURSED_CATALYST],
  4: [SHARP_CATALYST, HARDENED_CATALYST, ENGRAVED_CATALYST, ETHEREAL_CATALYST],
  5: [EXQUISITE_CATALYST, DIVINE_CATALYST, ARCANE_CATALYST, CELESTIAL_CATALYST],
}
