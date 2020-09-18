import { createFootwear, createHat, createLightArmor } from '..'

export const LEATHER_CAP = () =>
  createHat('Leather Cap', 'common', 25, {
    armor: 1,
    resistance: 1,
  })

export const LEATHER_ARMOR = () =>
  createLightArmor('Leather Armor', 'common', 50, {
    armor: 5,
    resistance: 3,
  })

export const LEATHER_BOOTS = () =>
  createFootwear('Leather Boots', 'common', 15, {
    armor: 1,
    agility: 1,
  })
