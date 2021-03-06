import { createFootwear, createMagicArmor, createMagicHat } from '..'

export const STUDENT_CAP = () =>
  createMagicHat('Student Cap', 'common', 15, {
    resistance: 2,
    intelligence: 1,
  })

export const STUDENT_ROBES = () =>
  createMagicArmor('Student Robes', 'common', 20, {
    armor: 1,
    resistance: 3,
    strength: -2,
    intelligence: 2,
  })

export const STUDENT_BOOTS = () =>
  createFootwear('Student Boots', 'common', 15, {
    resistance: 2,
    intelligence: 1,
    strength: -2,
  })
