import { createFootwear, createHat, createLightArmor } from '../..'
import { tArmor } from '../../../type'
import {
  AdventureBoots,
  AdventureCloak,
  AdventureHood,
  ApprenticeHat,
  ApprenticeShoes,
  AristocratAttire,
  AristocratHat,
  AristocratShoes,
  GraveguardArmor,
  GraveguardBoots,
  GraveguardHelmet,
} from '../level1'

export const DrifterHat: tArmor = {
  ...createHat('Drifter Hat', 'common', 0, {
    armor: 1,
  }),
  level: 0,
  upgrades: [
    GraveguardHelmet.id,
    AdventureHood.id,
    ApprenticeHat.id,
    AristocratHat.id,
  ],
}

export const DrifterShirt: tArmor = {
  ...createLightArmor('Drifter Shirt', 'common', 0, {
    armor: 1,
    resistance: 1,
  }),
  level: 0,
  upgrades: [
    GraveguardArmor.id,
    AdventureCloak.id,
    ApprenticeHat.id,
    AristocratAttire.id,
  ],
}

export const DrifterShoes: tArmor = {
  ...createFootwear('Drifter Shoes', 'common', 0, {
    resistance: 1,
  }),
  level: 0,
  upgrades: [
    GraveguardBoots.id,
    AdventureBoots.id,
    ApprenticeShoes.id,
    AristocratShoes.id,
  ],
}
