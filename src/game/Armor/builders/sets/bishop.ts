import { createFootwear, createMagicArmor, createMagicHat } from '..'

export const BISHOP_MITRE = () =>
  createMagicHat('Bishop Mitre', 'rare', 100, {
    resistance: 10,
    maxInspirationOffset: 1,
    intelligence: 5,
  })

export const BISHOP_ROBES = () =>
  createMagicArmor(
    'Bishop Robes',
    'rare',
    200,
    {
      armor: 4,
      resistance: 15,
      maxInspirationOffset: 1,
      strength: -7,
      intelligence: 5,
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

export const BISHOP_SHOES = () =>
  createFootwear('Bishop Shoes', 'rare', 120, {
    armor: 4,
    resistance: 6,
    strength: -7,
    intelligence: 4,
  })
