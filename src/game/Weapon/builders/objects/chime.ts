import { createBreakableWeapon, createWeapon } from '..'
import {
  GLASS_RING,
  RESET,
  REVERBERATE,
  RING,
  RUSH,
  SLOW,
  STUN,
  VANISH,
  WITHERING_RING,
} from '../../../Skill/skills/chime'
import { tWeaponsByLevel } from '../type'

const type = 'chime'
export const PATRICIANS_CHIME = () => ({
  ...createWeapon(type, 'starting', [RING, STUN], {}),
  name: `Patrician Chime`,
})
export const RUSTED_CHIME = () =>
  createWeapon(type, 'rusted', [RING, REVERBERATE], {})
export const TOMB_CHIME = () =>
  createWeapon(type, 'tomb', [RING, SLOW, VANISH], {})
export const BURRIED_CHIME = () =>
  createWeapon(type, 'burried', [RING, STUN, VANISH], {})
export const WITHERING_CHIME = () =>
  createBreakableWeapon(type, 'withering', [WITHERING_RING], {})
export const GLASS_CHIME = () =>
  createBreakableWeapon(type, 'glass', [GLASS_RING], {})

export const IRON_CHIME = () =>
  createWeapon(type, 'iron', [RING, REVERBERATE, STUN], {})
export const STEEL_CHIME = () =>
  createWeapon(type, 'steel', [RING, RUSH, RESET], {})
export const STAINLESS_CHIME = () =>
  createWeapon(type, 'stainless', [RING, REVERBERATE, RUSH, RESET], {})

export const ANCIENT_CHIME = () =>
  createWeapon(type, 'ancient', [RING, REVERBERATE, STUN], {})
export const CRYSTAL_CHIME = () =>
  createBreakableWeapon(type, 'crystal', [GLASS_RING], {})
export const ELEMENTAL_CHIME = () => createWeapon(type, 'elemental', [RING], {})
export const CURSED_CHIME = () => createWeapon(type, 'cursed', [RING], {})

export const SHARP_CHIME = () =>
  createWeapon(type, 'sharp', [RING, REVERBERATE, STUN, SLOW], {})
export const HARDENED_CHIME = () =>
  createWeapon(type, 'hardened', [RING, REVERBERATE, STUN, SLOW], {})
export const ENGRAVED_CHIME = () =>
  createWeapon(type, 'engraved', [RING, REVERBERATE, STUN, SLOW], {})
export const ETHEREAL_CHIME = () =>
  createBreakableWeapon(type, 'ethereal', [GLASS_RING], {})

export const EXQUISITE_CHIME = () =>
  createWeapon(type, 'exquisite', [RING, REVERBERATE, STUN, SLOW], {})
export const DIVINE_CHIME = () =>
  createWeapon(type, 'divine', [RING, REVERBERATE, STUN, SLOW], {})
export const ARCANE_CHIME = () =>
  createWeapon(type, 'arcane', [RING, REVERBERATE, STUN, SLOW], {})
export const CELESTIAL_CHIME = () =>
  createBreakableWeapon(type, 'celestial', [RING, REVERBERATE, STUN, SLOW], {})

export const CHIMES: tWeaponsByLevel = {
  0: [PATRICIANS_CHIME],
  1: [RUSTED_CHIME, TOMB_CHIME, BURRIED_CHIME, WITHERING_CHIME, GLASS_CHIME],
  2: [IRON_CHIME, STEEL_CHIME, STAINLESS_CHIME],
  3: [ANCIENT_CHIME, CRYSTAL_CHIME, ELEMENTAL_CHIME, CURSED_CHIME],
  4: [SHARP_CHIME, HARDENED_CHIME, ENGRAVED_CHIME, ETHEREAL_CHIME],
  5: [EXQUISITE_CHIME, DIVINE_CHIME, ARCANE_CHIME, CELESTIAL_CHIME],
}
