import { createFootwear, createHeavyArmor, createHelmet } from '..'

export const GRAVEGUARD_HELMET = () =>
  createHelmet('Graveguard Helmet', 'common', 25, {
    armor: 2,
    resistance: 1,
    healthRegeneration: 1,
  })

export const GRAVEGUARD_ARMOR = () =>
  createHeavyArmor('Graveguard Armor', 'uncommon', 80, {
    armor: 6,
    resistance: 1,
    strength: 2,
    vigor: 2,
  })

export const GRAVEGUARD_BOOTS = () =>
  createFootwear('Graveguard Boots', 'common', 15, {
    armor: 2,
    resistance: 1,
    vigor: 2,
  })
