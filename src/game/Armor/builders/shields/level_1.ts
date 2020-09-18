import { createShield } from '..'
import { TAUNT } from '../../../Skill/skills/armor'

export const WOODEN_PLANK_SHIELD = () =>
  createShield(
    'Wooden Plan Shield',
    'common',
    25,
    {
      armor: 4,
      resistance: 2,
    },
    [TAUNT],
  )

export const CULTIST_SHIELD = () =>
  createShield(
    'Cultist Shield',
    'common',
    25,
    {
      armor: 3,
      resistance: 1,
    },
    [TAUNT],
  )

export const WOODEN_BUCKLER = () =>
  createShield('Wooden Buckler', 'common', 15, {
    evasion: 3,
  })

export const IRON_BUCKLER = () =>
  createShield('Iron Buckler', 'common', 25, {
    armor: 1,
    resistance: 1,
    evasion: 5,
  })

export const APPRENTICE_WARD = () =>
  createShield(
    'Apprentice Shield',
    'common',
    25,
    {
      armor: 2,
      resistance: 3,
    },
    [TAUNT],
  )

export const IRON_WAR_SHIELD = () =>
  createShield(
    'Iron War Shield',
    'uncommon',
    30,
    {
      armor: 2,
      resistance: 2,
      agility: -5,
    },
    [TAUNT],
    ['stunned'],
  )
