import { createFootwear, createMagicArmor, createMagicHat } from '..'

export const NOVICE_HAT = () =>
  createMagicHat('Novice Hat', 'common', 35, {
    resistance: 6,
    intelligence: 3,
  }) // confuse immunity

export const NOVICE_ROBES = () =>
  createMagicArmor('Novice Robes', 'uncommon', 90, {
    armor: 3,
    resistance: 9,
    maxInspirationOffset: 1,
    strength: -4,
    intelligence: 4,
  })

export const NOVICE_SHOES = () =>
  createFootwear('Novice Shoes', 'common', 25, {
    armor: 2,
    resistance: 4,
    strength: -3,
    intelligence: 3,
  })
