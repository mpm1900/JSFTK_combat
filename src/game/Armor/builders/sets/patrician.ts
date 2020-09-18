import { createFootwear, createHat, createLightArmor } from '..'

export const PATRICIAN_HAT = () =>
  createHat('Patrician Hat', 'common', 25, {
    armor: 1,
    resistance: 1,
    charisma: 1,
  })

export const PATRICIAN_ATTIRE = () =>
  createLightArmor('Patrician Attire', 'common', 70, {
    armor: 1,
    resistance: 1,
    charisma: 2,
    luck: 2,
  })

export const PATRICIAN_SHOES = () =>
  createFootwear('Patrician Shoes', 'common', 25, {
    armor: 1,
    resistance: 2,
    charisma: 1,
    dexterity: -2,
    luck: 1,
  })
