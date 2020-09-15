import { createFootwear, createHat, createLightArmor } from '..'

export const RANGER_HOOD = () =>
  createHat('Ranger Hood', 'common', 5, {
    resistance: 1,
    evasion: 3,
    dexterity: 1,
  })
export const RANGER_CLOAK = () =>
  createLightArmor('Ranger Cloak', 'common', 10, {
    armor: 1,
    resistance: 1,
    evasion: 5,
    dexterity: 2,
    charisma: -2,
  })
export const RANGER_BOOTS = () =>
  createFootwear('Ranger Boots', 'common', 5, {
    armor: 1,
    evasion: 2,
    dexterity: 1,
    agility: 1,
  })
