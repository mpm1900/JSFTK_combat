import { StatusTypeT, StatusT, TagTypeT, TagT } from '../types'
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
          // TODO we need a new stat for taking more damage
          //damageModifier: 0.25,
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
}

export const TAG_EFFECTS: Record<TagTypeT, TagT> = {
  targeted: {
    type: 'targeted',
    duration: 5,
    damageModifier: 0,
    description: 'All enemies will attack this character, if able.',
  },
  dazed: {
    type: 'dazed',
    duration: 5,
    damageModifier: 0,
    description: 'Character is temporarily halted on the combat queue.',
  },
  evasive: {
    type: 'evasive',
    duration: 5,
    damageModifier: 0,
    description: 'Non-perfect attacks will miss when targeting this character.',
  },
}
