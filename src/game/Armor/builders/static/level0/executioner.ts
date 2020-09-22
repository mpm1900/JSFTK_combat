import { createFootwear, createHeavyArmor, createHelmet } from '../..'
import { tArmor } from '../../../type'
import {
  ChainMailArmor,
  ChainMailBoots,
  ChainMailHelmet,
  GraveguardArmor,
  GraveguardBoots,
  GraveguardHelmet,
} from '../level1'

export const ExecutionerHelmet: tArmor = {
  ...createHelmet('Executioner Helmet', 'common', 0, {
    armor: 1,
    strength: 1,
  }),
  level: 0,
  upgrades: [GraveguardHelmet.id, ChainMailHelmet.id],
}

export const ExecutionerArmor: tArmor = {
  ...createHeavyArmor('Executioner Armor', 'common', 0, {
    armor: 2,
    strength: 2,
    intelligence: -2,
  }),
  level: 0,
  upgrades: [GraveguardArmor.id, ChainMailArmor.id],
}

export const ExecutionerBoots: tArmor = {
  ...createFootwear('Executioner Boots', 'common', 0, {
    strength: 1,
    vigor: 1,
  }),
  level: 0,
  upgrades: [GraveguardBoots.id, ChainMailBoots.id],
}
