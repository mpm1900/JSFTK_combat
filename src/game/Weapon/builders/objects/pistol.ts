import { createBreakableWeapon, createWeapon } from '..'
import { FAN_FIRE, FIRE, SNIPE } from '../../../Skill/skills/pistol'
import { tWeaponsByLevel } from '../type'

const type = 'pistol'
export const PATRICIANS_PISTOL = () => ({
  ...createWeapon(type, 'starting', [], {}),
  name: `Patrician Pistol`,
})
export const RUSTED_PISTOL = () =>
  createWeapon(type, 'rusted', [FIRE, SNIPE, FAN_FIRE], {})
export const TOMB_PISTOL = () =>
  createWeapon(type, 'tomb', [FIRE, SNIPE, FAN_FIRE], {})
export const BURRIED_PISTOL = () =>
  createWeapon(type, 'buried', [FIRE, SNIPE, FAN_FIRE], {})
export const WITHERING_PISTOL = () =>
  createBreakableWeapon(type, 'withering', [FIRE], {})
export const GLASS_PISTOL = () =>
  createBreakableWeapon(type, 'glass', [FIRE], {})

export const IRON_PISTOL = () =>
  createWeapon(type, 'iron', [FIRE, SNIPE, FAN_FIRE], {})
export const STEEL_PISTOL = () =>
  createWeapon(type, 'steel', [FIRE, SNIPE, FAN_FIRE], {})
export const STAINLESS_PISTOL = () =>
  createWeapon(type, 'stainless', [FIRE, SNIPE, FAN_FIRE], {})

export const ANCIENT_PISTOL = () =>
  createWeapon(type, 'ancient', [FIRE, SNIPE, FAN_FIRE], {})
export const CRYSTAL_PISTOL = () =>
  createBreakableWeapon(type, 'crystal', [FIRE], {})
export const ELEMENTAL_PISTOL = () =>
  createWeapon(type, 'elemental', [FIRE, SNIPE, FAN_FIRE], {})
export const CURSED_PISTOL = () =>
  createWeapon(type, 'cursed', [FIRE, SNIPE, FAN_FIRE], {})

export const SHARP_PISTOL = () =>
  createWeapon(type, 'sharp', [FIRE, SNIPE, FAN_FIRE], {})
export const HARDENED_PISTOL = () =>
  createWeapon(type, 'hardened', [FIRE, SNIPE, FAN_FIRE], {})
export const ENGRAVED_PISTOL = () =>
  createWeapon(type, 'engraved', [FIRE, SNIPE, FAN_FIRE], {})
export const ETHEREAL_PISTOL = () =>
  createBreakableWeapon(type, 'ethereal', [FIRE], {})

export const EXQUISITE_PISTOL = () =>
  createWeapon(type, 'exquisite', [FIRE, SNIPE, FAN_FIRE], {})
export const DIVINE_PISTOL = () =>
  createWeapon(type, 'divine', [FIRE, SNIPE, FAN_FIRE], {})
export const ARCANE_PISTOL = () =>
  createWeapon(type, 'arcane', [FIRE, SNIPE, FAN_FIRE], {})
export const CELESTIAL_PISTOL = () =>
  createBreakableWeapon(type, 'celestial', [FIRE], {})

export const PISTOLS: tWeaponsByLevel = {
  0: [PATRICIANS_PISTOL],
  1: [
    RUSTED_PISTOL,
    TOMB_PISTOL,
    BURRIED_PISTOL,
    WITHERING_PISTOL,
    GLASS_PISTOL,
  ],
  2: [IRON_PISTOL, STEEL_PISTOL, STAINLESS_PISTOL],
  3: [ANCIENT_PISTOL, CRYSTAL_PISTOL, ELEMENTAL_PISTOL, CURSED_PISTOL],
  4: [SHARP_PISTOL, HARDENED_PISTOL, ENGRAVED_PISTOL, ETHEREAL_PISTOL],
  5: [EXQUISITE_PISTOL, DIVINE_PISTOL, ARCANE_PISTOL, CELESTIAL_PISTOL],
}
