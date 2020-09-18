import { createFootwear, createHeavyArmor, createHelmet } from '..'

export const TOMB_HELMET = () =>
  createHelmet('Tomb Helment', 'common', 30, {
    armor: 3,
    resistance: 3,
  })

export const TOMB_ARMOR = () =>
  createHeavyArmor('Tomb Armor', 'common', 70, {
    armor: 7,
    resistance: 5,
  })

export const TOMB_BOOTS = () =>
  createFootwear('Tomb Boots', 'common', 35, {
    armor: 3,
    resistance: 2,
  })
