import { createFootwear, createHat, createLightArmor } from '..'

export const ANTIQUATED_HAT = () =>
  createHat('Antiquated Hat', 'common', 35, {
    armor: 2,
    resistance: 3,
    maxInspirationOffset: 1,
    charisma: 3,
    luck: 3,
  })

export const ANTIQUATED_ATTIRE = () =>
  createLightArmor('Antiquated Attire', 'uncommon', 80, {
    armor: 6,
    resistance: 6,
    dexterity: -4,
    charisma: 4,
    luck: 4,
  })

export const ANTIQUATED_SHOES = () =>
  createFootwear('Antiquated Shoes', 'common', 35, {
    armor: 2,
    resistance: 3,
    dexterity: -4,
    charisma: 3,
    luck: 3,
  })
