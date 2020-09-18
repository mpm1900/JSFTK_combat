import { createFootwear, createHeavyArmor, createHelmet } from '..'

export const FALLEN_RAIDER_HELMENT = () =>
  createHelmet('Fallen Raider Helmet', 'uncommon', 50, {
    armor: 6,
    resistance: 2,
    strength: 3,
    intelligence: -3,
  })

export const FALLEN_RAIDER_ARMOR = () =>
  createHeavyArmor(
    'Fallen Raider Armor',
    'rare',
    100,
    {
      armor: 10,
      resistance: 2,
      strength: 4,
      intelligence: -4,
    },
    [],
  )

export const FALLEN_RAIDER_BOOTS = () =>
  createFootwear('Fallen Raider Boots', 'uncommon', 60, {
    armor: 5,
    evasion: 3,
    vigor: 4,
    strength: 3,
  })
