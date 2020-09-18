import { createFootwear, createHat, createLightArmor } from '..'

export const NOBLE_HAT = () =>
  createHat('Noble Hat', 'uncommon', 50, {
    armor: 3,
    resistance: 5,
    maxInspirationOffset: 1,
    charisma: 5,
    luck: 5,
  })

export const NOBLE_OUTFIT = () =>
  createLightArmor('Noble Outfit', 'rare', 100, {
    armor: 8,
    resistance: 8,
    dexterity: -5,
    charisma: 5,
    luck: 5,
  })

export const NOBLE_SHOES = () =>
  createFootwear('Noble Shoes', 'uncommon', 50, {
    armor: 3,
    resistance: 4,
    dexterity: -4,
    charisma: 4,
    luck: 4,
  })
