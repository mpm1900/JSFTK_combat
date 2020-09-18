import { createFootwear, createHat, createLightArmor } from '..'

export const ARISTOCRAT_HAT = () =>
  createHat('Aristocrat Hat', 'common', 25, {
    armor: 1,
    resistance: 2,
    maxInspirationOffset: 1,
    charisma: 2,
    luck: 2,
  })

export const ARISTOCRAT_ATTIRE = () =>
  createLightArmor('Aristocrat Attire', 'uncommon', 80, {
    armor: 4,
    resistance: 4,
    charisma: 3,
    luck: 3,
  })

export const ARISTOCRAT_SHOES = () =>
  createFootwear('Aristocrat Shoes', 'common', 30, {
    armor: 1,
    resistance: 2,
    dexterity: -2,
    charisma: 2,
    luck: 2,
  })
