import { createFootwear, createHat, createLightArmor } from '..'

export const ASSASSIN_HOOD = () =>
  createHat('Assassin Hood', 'uncommon', 120, {
    resistance: 5,
    evasion: 5,
    dexterity: 3,
  })

export const ASSASSIN_CLOAK = () =>
  createLightArmor('Assassin Cloak', 'rare', 200, {
    armor: 9,
    resistance: 9,
    evasion: 10,
    dexterity: 7,
    charisma: -5,
  })

export const ASSASSIN_BOOTS = () =>
  createFootwear('Rogue Boots', 'uncommon', 120, {
    armor: 5,
    evasion: 5,
    dexterity: 5,
    agility: 5,
  })
