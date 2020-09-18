import {
  createFootwear,
  createHat,
  createLightArmor,
  createMagicArmor,
} from '..'

export const NECROMANCER_COWL = () =>
  createHat('Necromancer Cowl', 'uncommon', 50, {
    resistance: 8,
    intelligence: 4,
    maxInspirationOffset: 1,
  })

export const NECROMANCER_ROBES = () =>
  createMagicArmor(
    'Necromancer Robes',
    'rare',
    100,
    {
      armor: 4,
      resistance: 12,
      maxInspirationOffset: 1,
      strength: -5,
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

export const NECROMANCER_WRAPS = () =>
  createFootwear('Necromancer Wraps', 'uncommon', 60, {
    armor: 3,
    evasion: 5,
    strength: -4,
    intelligence: 4,
  })
