import { createFootwear, createMagicArmor, createMagicHat } from '../..'
import { tArmor } from '../../../type'
import { NoviceHat, NoviceRobes, NoviceShoes } from '../level2/novice'

export const ApprenticeHat: tArmor = {
  ...createMagicHat('Apprentice Cap', 'uncommon', 100, {
    resistance: 4,
    maxInspirationOffset: 1,
    intelligence: 2,
  }),
  level: 1,
  upgrades: [NoviceHat.id],
}

export const ApprenticeRobes: tArmor = {
  ...createMagicArmor(
    'Apprentice Robe',
    'uncommon',
    150,
    {
      armor: 2,
      resistance: 6,
      maxInspirationOffset: 1,
      strength: -3,
      intelligence: 3,
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
  level: 1,
  upgrades: [NoviceRobes.id],
}

export const ApprenticeShoes: tArmor = {
  ...createFootwear('Apprentice Shoes', 'uncommon', 100, {
    armor: 1,
    resistance: 3,
    strength: -2,
    intelligence: 2,
  }),
  level: 1,
  upgrades: [NoviceShoes.id],
}
