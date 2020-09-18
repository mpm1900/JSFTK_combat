import { createFootwear, createHeavyArmor, createHelmet } from '..'

export const OLD_KNIGHT_HELMET = () =>
  createHelmet('Old Knight Helmet', 'uncommon', 100, {
    armor: 8,
    resistance: 2,
    strength: 5,
    intelligence: -5,
  })

export const OLD_KNIGHT_ARMOR = () =>
  createHeavyArmor(
    'Old Knight Armor',
    'rare',
    250,
    {
      armor: 13,
      resistance: 3,
      strength: 5,
      intelligence: -5,
    },
    [],
  )

export const OLD_KNIGHT_BOOTS = () =>
  createFootwear('Old Knight Boots', 'uncommon', 100, {
    armor: 7,
    evasion: 4,
    vigor: 6,
    strength: 5,
  })
