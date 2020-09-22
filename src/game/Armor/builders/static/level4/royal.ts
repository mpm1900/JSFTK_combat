import { createFootwear, createHat, createLightArmor } from '../..'
import { tArmor } from '../../../type'

export const RoyalHat: tArmor = {
  ...createHat('Royal Hat', 'mythic', 500, {
    armor: 3,
    resistance: 5,
    maxInspirationOffset: 1,
    charisma: 5,
    luck: 5,
  }),
  level: 3,
  upgrades: [],
}

export const RoyalAttire: tArmor = {
  ...createLightArmor('Royal Outfit', 'mythic', 700, {
    armor: 8,
    resistance: 8,
    dexterity: -5,
    charisma: 5,
    luck: 5,
  }),
  level: 3,
  upgrades: [],
}

export const RoyalShoes: tArmor = {
  ...createFootwear('Royal Shoes', 'mythic', 500, {
    armor: 3,
    resistance: 4,
    dexterity: -4,
    charisma: 4,
    luck: 4,
  }),
  level: 3,
  upgrades: [],
}
