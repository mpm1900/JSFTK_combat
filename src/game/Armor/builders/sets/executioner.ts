import { createFootwear, createHat, createHeavyArmor } from '..'

export const EXECUTIONER_HELMET = () =>
  createHat('Executioner Helmet', 'common', 5, {
    armor: 1,
    resistance: 1,
    vigor: 1,
  })

export const EXECUTIONER_ARMOR = () =>
  createHeavyArmor('Executioner Armor', 'common', 10, {
    armor: 3,
    resistance: 2,
    strength: 2,
    intelligence: -2,
  })

export const EXECUTIONER_BOOTS = () =>
  createFootwear('Executioner Boots', 'common', 5, {
    armor: 1,
    resistance: 1,
    strength: 1,
    vigor: 1,
  })
