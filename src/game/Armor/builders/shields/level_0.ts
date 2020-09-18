import { createShield } from '..'
import { TAUNT } from '../../../Skill/skills/armor'

export const FOREST_BUCKLER = () =>
  createShield('Forest Buckler', 'uncommon', 20, {
    armor: 1,
    evasion: 4,
  })

export const LEATHER_BUCKLER = () =>
  createShield('Leather Buckler', 'common', 10, {
    evasion: 2,
  })

export const STUDENT_WARD = () =>
  createShield(
    'Student Ward',
    'uncommon',
    20,
    {
      resistance: 2,
    },
    [TAUNT],
  )

export const BROKEN_SHIELD = () =>
  createShield(
    'Broken Shield',
    'common',
    14,
    {
      armor: 1,
    },
    [TAUNT],
  )

export const VILLAGER_SHIELD = () =>
  createShield(
    'Villager Shield',
    'common',
    20,
    {
      armor: 2,
      resistance: 2,
    },
    [TAUNT],
  )

export const WOODEN_WAR_SHIELD = () =>
  createShield(
    'Wooden War Shield',
    'common',
    20,
    {
      armor: 1,
      resistance: 1,
      agility: -5,
    },
    [TAUNT],
    ['stunned'],
  )
