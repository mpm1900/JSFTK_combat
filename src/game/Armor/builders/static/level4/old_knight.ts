import { createFootwear, createHeavyArmor, createHelmet } from '../..'
import { levelUp } from '../../../../Character/util'
import { tArmor } from '../../../type'

export const OldKnightHelmet: tArmor = {
  ...createHelmet('Old Knight Helmet', 'mythic', 500, {
    armor: 8,
    resistance: 2,
    strength: 5,
    intelligence: -5,
  }),
  level: 4,
  upgrades: [],
}

export const OldKnightArmor: tArmor = {
  ...createHeavyArmor(
    'Old Knight Armor',
    'mythic',
    700,
    {
      armor: 13,
      resistance: 3,
      strength: 5,
      intelligence: -5,
    },
    [],
  ),
  level: 4,
  upgrades: [],
}

export const OldKnightBoots: tArmor = {
  ...createFootwear('Old Knight Boots', 'mythic', 100, {
    armor: 7,
    evasion: 4,
    vigor: 6,
    strength: 5,
  }),
  level: 4,
  upgrades: [],
}
