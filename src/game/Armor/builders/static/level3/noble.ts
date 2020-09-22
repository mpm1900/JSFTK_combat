import { createFootwear, createHat, createLightArmor } from '../..'
import { tArmor } from '../../../type'
import { RoyalAttire, RoyalHat, RoyalShoes } from '../level4'

export const NobleHat: tArmor = {
  ...createHat('Noble Hat', 'epic', 400, {
    armor: 3,
    resistance: 5,
    maxInspirationOffset: 1,
    charisma: 5,
    luck: 5,
  }),
  level: 3,
  upgrades: [RoyalHat.id],
}

export const NobleAttire: tArmor = {
  ...createLightArmor('Noble Outfit', 'epic', 450, {
    armor: 8,
    resistance: 8,
    dexterity: -5,
    charisma: 5,
    luck: 5,
  }),
  level: 3,
  upgrades: [RoyalAttire.id],
}

export const NobleShoes: tArmor = {
  ...createFootwear('Noble Shoes', 'epic', 400, {
    armor: 3,
    resistance: 4,
    dexterity: -4,
    charisma: 4,
    luck: 4,
  }),
  level: 3,
  upgrades: [RoyalShoes.id],
}
