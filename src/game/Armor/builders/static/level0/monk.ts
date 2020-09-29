import { createFootwear, createMagicArmor, createMagicHat } from '../..'
import { tArmor } from '../../../type'
import {
  ApprenticeHat,
  ApprenticeRobes,
  ChainMailArmor,
  GraveguardArmor,
  GraveguardBoots,
  GraveguardHelmet,
} from '../level1'

export const MonkHood: tArmor = {
  ...createMagicHat('Monk Hood', 'common', 0, {
    strength: 1,
    intelligence: 1,
  }),
  level: 0,
  upgrades: [GraveguardHelmet.id, ChainMailArmor.id, ApprenticeHat.id],
}

export const MonkRobes: tArmor = {
  ...createMagicArmor('Monk Robes', 'common', 0, {
    armor: 1,
    resistance: 1,
    intelligence: 1,
  }),
  level: 0,
  upgrades: [GraveguardArmor.id, ChainMailArmor.id, ApprenticeRobes.id],
}

export const MonkShoes: tArmor = {
  ...createFootwear('Monk Shoes', 'common', 0, {
    strength: 1,
    agility: 1,
  }),
  level: 0,
  upgrades: [GraveguardBoots.id, ChainMailArmor.id, ApprenticeRobes.id],
}
