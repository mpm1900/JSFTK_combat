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

export const MercenaryHelmet: tArmor = {
  ...createHelmet('Mercenary Helmet', 'common', 0, {
    armor: 1,
    vigor: 1,
  }),
  level: 0,
  upgrades: [GraveguardHelmet.id, ChainMailHelmet.id],
}

export const MercenaryArmor: tArmor = {
  ...createHeavyArmor('Mercenary Armor', 'common', 0, {
    armor: 2,
    vigor: 1,
    strength: 1,
  }),
  level: 0,
  upgrades: [GraveguardArmor.id, ChainMailArmor.id],
}

export const MercenaryBoots: tArmor = {
  ...createFootwear('Mercenary Boots', 'common', 0, {
    strength: 1,
    vigor: 1,
  }),
  level: 0,
  upgrades: [GraveguardBoots.id, ChainMailBoots.id],
}
