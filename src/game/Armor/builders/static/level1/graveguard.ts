import { createFootwear, createHeavyArmor, createHelmet } from '../..'
import { tArmor } from '../../../type'
import {
  BoneArmor,
  BoneBoots,
  BoneHelmet,
  IronArmor,
  IronBoots,
  IronHelmet,
} from '../level2'

export const GraveguardHelmet: tArmor = {
  ...createHelmet('Graveguard Helmet', 'uncommon', 100, {
    armor: 2,
    resistance: 1,
    strength: 1,
    intelligence: -1,
  }),
  level: 1,
  upgrades: [IronHelmet.id, BoneHelmet.id],
}

export const GraveguardArmor: tArmor = {
  ...createHeavyArmor('Graveguard Armor', 'uncommon', 150, {
    armor: 5,
    resistance: 2,
    strength: 3,
    intelligence: -3,
  }),
  level: 1,
  upgrades: [IronArmor.id, BoneArmor.id],
}

export const GraveguardBoots: tArmor = {
  ...createFootwear('Graveguard Boots', 'uncommon', 100, {
    armor: 2,
    resistance: 1,
    strength: 1,
    agility: 1,
    intelligence: -1,
  }),
  level: 1,
  upgrades: [IronBoots.id, BoneBoots.id],
}
