import { createFootwear, createMagicArmor, createMagicHat } from '../..'
import { tArmor } from '../../../type'
import { NecromancerCowl, NecromancerRobes, NecromancerWraps } from '../level3'

export const NoviceHat: tArmor = {
  ...createMagicHat('Novice Hat', 'rare', 250, {
    resistance: 6,
    intelligence: 3,
  }),
  level: 2,
  upgrades: [NecromancerCowl.id],
}

export const NoviceRobes: tArmor = {
  ...createMagicArmor(
    'Novice Robes',
    'rare',
    300,
    {
      armor: 3,
      resistance: 9,
      maxInspirationOffset: 1,
      strength: -4,
      intelligence: 4,
    },
    [],
    [
      'cursed-agility',
      'cursed-charisma',
      'cursed-dexterity',
      'cursed-intelligence',
      'cursed-luck',
      'cursed-strength',
      'cursed-vigor',
    ],
  ),
  level: 2,
  upgrades: [NecromancerRobes.id],
}

export const NoviceShoes: tArmor = {
  ...createFootwear('Novice Shoes', 'rare', 250, {
    armor: 2,
    resistance: 4,
    strength: -3,
    intelligence: 3,
  }),
  level: 2,
  upgrades: [NecromancerWraps.id],
}
