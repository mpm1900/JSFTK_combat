import { createFootwear, createHeavyArmor, createHelmet } from '..'

export const IRON_HELMET = () =>
  createHelmet(
    'Iron Helmet',
    'common',
    15,
    {
      armor: 4,
      strength: 2,
      dexterity: -4,
    },
    [],
    ['stunned'],
  )

export const IRON_ARMOR = () =>
  createHeavyArmor('Iron Armor', 'uncommon', 50, {
    armor: 7,
    resistance: 1,
    strength: 3,
    intelligence: -3,
  })

export const IRON_BOOTS = () =>
  createFootwear('Iron Boots', 'common', 15, {
    armor: 2,
    resistance: 2,
    healthRegeneration: 1,
    vigor: 4,
  })
