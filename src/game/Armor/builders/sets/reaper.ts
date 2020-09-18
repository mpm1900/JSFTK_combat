import { createFootwear, createHat, createLightArmor } from '..'

export const REAPER_HOOD = () =>
  createHat(
    'Reaper Hood',
    'uncommon',
    70,
    {
      armor: 1,
      resistance: 1,
      evasion: 5,
      criticalChance: 5,
      goldModifier: 5,
    },
    [],
    ['stunned'],
  )

export const REAPER_ROBES = () =>
  createLightArmor('Reaper Robes', 'rare', 150, {
    armor: 4,
    resistance: 4,
    evasion: 4,
    goldModifier: 10,
  })

export const REAPER_BOOTS = () =>
  createFootwear('Reaper Boots', 'uncommon', 70, {
    armor: 2,
    resistance: 2,
    evasion: 4,
    attackDamageModifier: 3,
  })
