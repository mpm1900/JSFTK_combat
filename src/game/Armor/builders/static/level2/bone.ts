import { createFootwear, createHeavyArmor, createHelmet } from '../..'
import { tArmor } from '../../../type'
import {
  FallenRaiderArmor,
  FallenRaiderBoots,
  FallenRaiderHelmet,
} from '../level3'

export const BoneHelmet: tArmor = {
  ...createHelmet('Bone Helmet', 'rare', 250, {
    armor: 2,
    resistance: 2,
    healthRegeneration: 1,
    attackDamageOffset: 3,
    vigor: 3,
  }),
  level: 2,
  upgrades: [FallenRaiderHelmet.id],
}

export const BoneArmor: tArmor = {
  ...createHeavyArmor(
    'Bone Armor',
    'rare',
    300,
    {
      armor: 5,
      resistance: 5,
      maxHealthOffset: 5,
      healthRegeneration: 2,
      vigor: 5,
    },
    [],
    ['frozen'],
  ),
  level: 2,
  upgrades: [FallenRaiderArmor.id],
}

export const BoneBoots: tArmor = {
  ...createFootwear('Bone Boots', 'rare', 250, {
    armor: 2,
    resistance: 2,
    healthRegeneration: 1,
    vigor: 4,
  }),
  level: 2,
  upgrades: [FallenRaiderBoots.id],
}
