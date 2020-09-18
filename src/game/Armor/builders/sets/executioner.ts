import { createFootwear, createHeavyArmor, createHelmet } from '..'

export const EXECUTIONER_HELMET = () =>
  createHelmet('Executioner Helmet', 'common', 15, {
    armor: 1,
    resistance: 1,
    vigor: 1,
  })

export const EXECUTIONER_ARMOR = () =>
  createHeavyArmor('Executioner Armor', 'common', 40, {
    armor: 3,
    resistance: 2,
    strength: 2,
    intelligence: -2,
  })

export const EXECUTIONER_BOOTS = () =>
  createFootwear('Executioner Boots', 'common', 15, {
    armor: 1,
    resistance: 1,
    strength: 1,
    vigor: 1,
  })
