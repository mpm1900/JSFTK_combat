import { createFootwear, createHeavyArmor, createHelmet } from '..'

export const BONE_HELMET = () =>
  createHelmet('Bone Helmet', 'common', 35, {
    armor: 2,
    resistance: 2,
    healthRegeneration: 1,
    vigor: 3,
  }) // bonus damage

export const BONE_ARMOR = () =>
  createHeavyArmor(
    'Bone Armor',
    'uncommon',
    80,
    {
      armor: 5,
      resistance: 5,
      maxHealthOffset: 5,
      healthRegeneration: 2,
      vigor: 5,
    },
    [],
    ['frozen'],
  )

export const BONE_BOOTS = () =>
  createFootwear('Bone Boots', 'common', 35, {
    armor: 2,
    resistance: 2,
    healthRegeneration: 1,
    vigor: 4,
  })
