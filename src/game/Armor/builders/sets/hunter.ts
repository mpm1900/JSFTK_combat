import { createFootwear, createHat, createLightArmor } from '..'

export const HUNTER_HOOD = () =>
  createHat('Hunter Hood', 'common', 15, {
    resistance: 3,
    evasion: 4,
    dexterity: 3,
  })

export const HUNTER_CLOAK = () =>
  createLightArmor('Hunter Cloak', 'uncommon', 50, {
    armor: 5,
    resistance: 5,
    evasion: 7,
    dexterity: 4,
    charisma: -4,
    agility: 2,
  })

export const HUNTER_BOOTS = () =>
  createFootwear('Hunter Boots', 'common', 15, {
    armor: 3,
    evasion: 4,
    dexterity: 3,
    agility: 3,
  })
