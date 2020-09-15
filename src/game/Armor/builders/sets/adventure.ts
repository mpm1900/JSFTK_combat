import { createFootwear, createHat, createLightArmor } from '..'

export const ADVENTURER_HOOD = () =>
  createHat('Adventurer Hood', 'common', 10, {
    resistance: 2,
    evasion: 3,
    dexterity: 2,
  })

export const ADVENTURER_CLOAK = () =>
  createLightArmor('Adventurer Cloak', 'uncommon', 40, {
    armor: 3,
    resistance: 3,
    evasion: 6,
    dexterity: 3,
    charisma: -4,
  })

export const ADVENTURER_BOOTS = () =>
  createFootwear('Adventurer Boots', 'common', 10, {
    armor: 2,
    evasion: 3,
    dexterity: 2,
    agility: 2,
  })
