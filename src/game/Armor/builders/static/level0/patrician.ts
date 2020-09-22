import { createFootwear, createHat, createLightArmor } from '../..'
import { tArmor } from '../../../type'
import { AristocratAttire, AristocratHat, AristocratShoes } from '../level1'

export const PatricianHat: tArmor = {
  ...createHat('Patrician Hat', 'common', 0, {
    resistance: 1,
    charisma: 1,
  }),
  level: 0,
  upgrades: [AristocratHat.id],
}

export const PatricianAttire: tArmor = {
  ...createLightArmor('Patrician Attire', 'common', 0, {
    armor: 1,
    resistance: 1,
    charisma: 2,
    luck: 2,
  }),
  level: 0,
  upgrades: [AristocratAttire.id],
}

export const PatricianShoes: tArmor = {
  ...createFootwear('Patrician Shoes', 'common', 0, {
    charisma: 1,
    dexterity: -2,
    luck: 1,
  }),
  level: 0,
  upgrades: [AristocratShoes.id],
}
