import { createFootwear, createMagicArmor, createMagicHat } from '../..'
import { tArmor } from '../../../type'

export const BishopMitre: tArmor = {
  ...createMagicHat('Bishop Mitre', 'mythic', 500, {
    resistance: 10,
    maxInspirationOffset: 1,
    intelligence: 5,
  }),
  level: 4,
  upgrades: [],
}

export const BishopRobes: tArmor = {
  ...createMagicArmor(
    'Bishop Robes',
    'mythic',
    700,
    {
      armor: 4,
      resistance: 15,
      maxInspirationOffset: 1,
      strength: -7,
      intelligence: 5,
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
  level: 4,
  upgrades: [],
}

export const BishopShoes: tArmor = {
  ...createFootwear('Bishop Shoes', 'mythic', 500, {
    armor: 4,
    resistance: 6,
    strength: -7,
    intelligence: 4,
  }),
  level: 4,
  upgrades: [],
}
