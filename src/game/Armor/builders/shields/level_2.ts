import { createShield } from '..'
import { TAUNT } from '../../../Skill/skills/armor'

export const GRAVEGUARD_SHIELD = () =>
  createShield(
    'Graveguard Shield',
    'uncommon',
    40,
    {
      armor: 2,
      resistance: 2,
      attackDamageOffset: 2,
    },
    [TAUNT],
  )

export const OLD_FOREST_SHIELD = () =>
  createShield('Old Forest Shield', 'rare', 50, {
    armor: 6,
    strength: 5,
    agility: -3,
  })

export const HEAVY_IRON_SHIELD = () =>
  createShield(
    'Heavy Iron Shield',
    'uncommon',
    40,
    {
      armor: 5,
      resistance: 5,
      agility: -2,
    },
    [TAUNT],
  )

export const NOVICE_WARD = () =>
  createShield('Novice Ward', 'uncommon', 40, {
    armor: 1,
    resistance: 3,
    damageReflection: {
      melee: 0,
      ranged: 6,
    },
  })

export const CULTIST_WARD = () =>
  createShield('Cultist Ward', 'uncommon', 40, {
    armor: 2,
    resistance: 6,
  })
