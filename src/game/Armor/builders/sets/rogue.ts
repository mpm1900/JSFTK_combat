import { createFootwear, createHat, createLightArmor } from '..'

export const ROGUE_HOOD = () =>
  createHat('Rogue Hood', 'uncommon', 100, {
    armor: 1,
    resistance: 3,
    evasion: 3,
  })

export const ROGUE_CLOAK = () =>
  createLightArmor('Rogue Cloak', 'rare', 200, {
    armor: 5,
    resistance: 5,
    evasion: 10,
    dexterity: 5,
    charisma: 5,
  })

export const ROGUE_BOOTS = () =>
  createFootwear('Rogue Boots', 'uncommon', 110, {
    armor: 3,
    evasion: 3,
    dexterity: 4,
    agility: 4,
  })
