import { createFootwear, createHeavyArmor, createHelmet } from '../..'
import { tArmor } from '../../../type'
import { OldKnightArmor, OldKnightBoots, OldKnightHelmet } from '../level4'

export const FallenRaiderHelmet: tArmor = {
  ...createHelmet('Fallen Raider Helmet', 'epic', 400, {
    armor: 6,
    resistance: 2,
    strength: 3,
    intelligence: -3,
  }),
  level: 3,
  upgrades: [OldKnightHelmet.id],
}

export const FallenRaiderArmor: tArmor = {
  ...createHeavyArmor(
    'Fallen Raider Armor',
    'epic',
    450,
    {
      armor: 10,
      resistance: 2,
      strength: 4,
      intelligence: -4,
    },
    [],
  ),
  level: 3,
  upgrades: [OldKnightArmor.id],
}

export const FallenRaiderBoots: tArmor = {
  ...createFootwear('Fallen Raider Boots', 'epic', 400, {
    armor: 5,
    evasion: 3,
    vigor: 4,
    strength: 3,
  }),
  level: 3,
  upgrades: [OldKnightBoots.id],
}
