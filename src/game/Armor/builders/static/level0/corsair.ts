import { createFootwear, createHat, createLightArmor } from '../..'
import { tArmor } from '../../../type'
import {
  AristocratAttire,
  AristocratHat,
  AristocratShoes,
  ChainMailArmor,
  ChainMailBoots,
  ChainMailHelmet,
} from '../level1'

export const CorsairHat: tArmor = {
  ...createHat('Corsair Hat', 'common', 0, {
    resistance: 1,
    charisma: 1,
  }),
  level: 0,
  upgrades: [AristocratHat.id, ChainMailHelmet.id],
}

export const CorsairAttire: tArmor = {
  ...createLightArmor('Corsair Attire', 'common', 0, {
    armor: 1,
    resistance: 1,
    charisma: 1,
  }),
  level: 0,
  upgrades: [AristocratAttire.id, ChainMailArmor.id],
}

export const CorsairShoes: tArmor = {
  ...createFootwear('Corsair Shoes', 'common', 0, {
    charisma: 1,
    vigor: 1,
  }),
  level: 0,
  upgrades: [AristocratShoes.id, ChainMailBoots.id],
}
