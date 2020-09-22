import { createFootwear, createMagicArmor, createMagicHat } from '../..'
import { tArmor } from '../../../type'
import { BishopMitre, BishopRobes, BishopShoes } from '../level4'

export const NecromancerCowl: tArmor = {
  ...createMagicHat('Necromancer Cowl', 'epic', 400, {
    resistance: 8,
    intelligence: 4,
    maxInspirationOffset: 1,
  }),
  level: 3,
  upgrades: [BishopMitre.id],
}

export const NecromancerRobes: tArmor = {
  ...createMagicArmor(
    'Necromancer Robes',
    'epic',
    450,
    {
      armor: 4,
      resistance: 12,
      maxInspirationOffset: 1,
      strength: -5,
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
  level: 3,
  upgrades: [BishopRobes.id],
}

export const NecromancerWraps: tArmor = {
  ...createFootwear('Necromancer Wraps', 'epic', 400, {
    armor: 3,
    evasion: 5,
    strength: -4,
    intelligence: 4,
  }),
  level: 3,
  upgrades: [BishopShoes.id],
}
