import { createFootwear, createHat, createLightArmor } from '../..'
import { tArmor } from '../../../type'
import { AntiquatedAttire, AntiquatedHat, AntiquatedShoes } from '../level2'

export const AristocratHat: tArmor = {
  ...createHat('Aristocrat Hat', 'uncommon', 100, {
    armor: 1,
    resistance: 2,
    maxInspirationOffset: 1,
    charisma: 2,
    luck: 2,
  }),
  level: 1,
  upgrades: [AntiquatedHat.id],
}

export const AristocratAttire: tArmor = {
  ...createLightArmor('Aristocrat Attire', 'uncommon', 150, {
    armor: 4,
    resistance: 4,
    charisma: 3,
    luck: 3,
  }),
  level: 1,
  upgrades: [AntiquatedAttire.id],
}

export const AristocratShoes: tArmor = {
  ...createFootwear('Aristocrat Shoes', 'uncommon', 100, {
    armor: 1,
    resistance: 2,
    dexterity: -2,
    charisma: 2,
    luck: 2,
  }),
  level: 1,
  upgrades: [AntiquatedShoes.id],
}
