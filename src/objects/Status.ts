import { StatusTypeT, StatusT } from '../types'
import { makeEntity } from '../functions/Entity'
import { ZERO_STATS } from './Stats'

const STATUS_DURATION = 5
export const STATUS_EFFECTS: Record<StatusTypeT, StatusT> = {
  bleeding: {
    ...makeEntity('Bleeding'),
    type: 'bleeding',
    canStack: false,
    duration: STATUS_DURATION,
    traits: [],
    commitChance: 50,
    committedTraits: [
      {
        duration: STATUS_DURATION,
        stats: {
          ...ZERO_STATS,
          healthOffset: -10,
        },
      },
    ],
  },
  burning: {
    ...makeEntity('Burning'),
    type: 'burning',
    canStack: false,
    duration: STATUS_DURATION,
    traits: [],
    commitChance: 100,
    committedTraits: [
      {
        duration: STATUS_DURATION,
        stats: {
          ...ZERO_STATS,
          healthOffset: -10,
        },
      },
    ],
  },
  frozen: {
    ...makeEntity('Frozen'),
    type: 'frozen',
    canStack: false,
    duration: STATUS_DURATION,
    traits: [
      {
        duration: STATUS_DURATION,
        stats: {
          ...ZERO_STATS,
          weaknessModifier: 0.25,
        },
      },
    ],
    commitChance: 0,
    committedTraits: [],
  },
  poisoned: {
    ...makeEntity('Poisoned'),
    type: 'poisoned',
    canStack: true,
    duration: STATUS_DURATION,
    traits: [
      {
        duration: STATUS_DURATION,
        stats: {
          ...ZERO_STATS,
          strength: -5,
          intelligence: -5,
          perception: -5,
          talent: -5,
        },
      },
    ],
    commitChance: 100,
    committedTraits: [
      {
        duration: STATUS_DURATION,
        stats: {
          ...ZERO_STATS,
          healthOffset: -5,
        },
      },
    ],
  },
  targeted: {
    ...makeEntity('Targeted'),
    type: 'targeted',
    duration: 5,
    traits: [],
    committedTraits: [],
    commitChance: 100,
    canStack: false,
    description: 'All enemies will attack this character, if able.',
  },
  dazed: {
    ...makeEntity('Dazed'),
    type: 'dazed',
    duration: 5,
    traits: [],
    committedTraits: [],
    commitChance: 100,
    canStack: false,
    description: 'Character is temporarily halted on the combat queue.',
  },
  evasive: {
    ...makeEntity('Evasive'),
    type: 'evasive',
    duration: 5,
    traits: [],
    committedTraits: [],
    commitChance: 100,
    canStack: false,
    description: 'Non-perfect attacks will miss when targeting this character.',
  },
  protected: {
    ...makeEntity('Protected'),
    type: 'protected',
    duration: -1,
    traits: [],
    committedTraits: [],
    commitChance: 100,
    canStack: false,
    description: 'Negate the next damage that targets this character.',
  },
  ['speed-down']: {
    ...makeEntity('Speed Down'),
    type: 'speed-down',
    duration: 5,
    traits: [
      {
        duration: 5,
        stats: {
          ...ZERO_STATS,
          agility: -20,
        },
      },
    ],
    committedTraits: [],
    commitChance: 100,
    canStack: false,
    description: '-20 to Speed.',
  },
}
