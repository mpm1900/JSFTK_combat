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
        damage: 0,
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
        damage: 0,
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
        damage: 0,
        stats: {
          ...ZERO_STATS,
          damageModifier: 0.25,
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
        damage: 0,
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
        damage: 0,
        stats: {
          ...ZERO_STATS,
          healthOffset: -5,
        },
      },
    ],
  },
}
