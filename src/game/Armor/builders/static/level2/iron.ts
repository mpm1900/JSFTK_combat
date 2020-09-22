import { createFootwear, createHeavyArmor, createHelmet } from '../..'
import { tArmor } from '../../../type'
import {
  FallenRaiderArmor,
  FallenRaiderBoots,
  FallenRaiderHelmet,
} from '../level3'

export const IronHelmet: tArmor = {
  ...createHelmet(
    'Iron Helmet',
    'rare',
    250,
    {
      armor: 4,
      strength: 2,
      dexterity: -4,
    },
    [],
    ['stunned'],
  ),
  level: 2,
  upgrades: [FallenRaiderHelmet.id],
}

export const IronArmor: tArmor = {
  ...createHeavyArmor('Iron Armor', 'rare', 300, {
    armor: 7,
    resistance: 1,
    strength: 3,
    intelligence: -3,
  }),
  level: 2,
  upgrades: [FallenRaiderArmor.id],
}

export const IronBoots: tArmor = {
  ...createFootwear('Iron Boots', 'rare', 250, {
    armor: 2,
    resistance: 2,
    healthRegeneration: 1,
    vigor: 4,
  }),
  level: 2,
  upgrades: [FallenRaiderBoots.id],
}
