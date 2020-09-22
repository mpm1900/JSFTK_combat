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

export const ChainMailHelmet: tArmor = {
  ...createHelmet('Chain Mail Helmet', 'uncommon', 100, {
    armor: 2,
    resistance: 2,
    vigor: 1,
    healthRegeneration: 1,
  }),
  level: 1,
  upgrades: [IronHelmet.id, BoneHelmet.id],
}

export const ChainMailArmor: tArmor = {
  ...createHeavyArmor('Chain Mail Armor', 'uncommon', 150, {
    armor: 6,
    resistance: 1,
    vigor: 2,
    strength: 1,
    healthRegeneration: 2,
    agility: -2,
  }),
  level: 1,
  upgrades: [IronArmor.id, BoneArmor.id],
}

export const ChainMailBoots: tArmor = {
  ...createFootwear('Chain Mail Boots', 'uncommon', 100, {
    armor: 2,
    resistance: 2,
    vigor: 2,
    agility: -2,
  }),
  level: 1,
  upgrades: [IronBoots.id, BoneBoots.id],
}
