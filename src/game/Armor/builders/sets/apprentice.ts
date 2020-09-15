import { createFootwear, createMagicArmor, createMagicHat } from '..'

export const APPRENTICE_CAP = () =>
  createMagicHat('Apprentice Cap', 'common', 10, {
    resistance: 4,
    maxInspirationOffset: 1,
    intelligence: 2,
  }) // confuse immunity

export const APPRENTICE_ROBE = () =>
  createMagicArmor(
    'Apprentice Robe',
    'uncommon',
    40,
    {
      armor: 2,
      resistance: 6,
      maxInspirationOffset: 1,
      strength: -3,
      intelligence: 3,
    },
    [],
    [
      'cursed-agility',
      'cursed-charisma',
      'cursed-dexterity',
      'cursed-intelligence',
      'cursed-luck',
      'cursed-strength',
      'cursed-vigor',
    ],
  )

export const APPRENTICE_SHOES = () =>
  createFootwear('Apprentice Shoes', 'common', 10, {
    armor: 1,
    resistance: 3,
    strength: -2,
    intelligence: 2,
  })
