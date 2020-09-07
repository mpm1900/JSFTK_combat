import { tStatusType, tStatusConfig } from './type'
import { ZERO_STATS } from '../Stats/constants'

export const STATUS_CONFIG: Record<tStatusType, tStatusConfig> = {
  bleeding: {
    name: 'Bleeding',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      healthRegeneration: -10,
    },
  },
  burning: {
    name: 'Burning',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      healthRegeneration: -10,
    },
  },
  // TODO: Different cursed status' for different stats
  cursed: {
    name: 'Cursed',
    description: '',
    canStack: false,
    isTemporary: false,
    duration: -1,
    stats: {
      ...ZERO_STATS,
    },
  },
  frozen: {
    name: 'Frozen',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      damageTakenModifier: 25,
    },
  },
  poisoned: {
    name: 'Poisoned',
    description: '',
    canStack: true,
    isTemporary: false,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      healthRegeneration: -5,
    },
  },
  // TODO: Shocked status
  shocked: {
    name: 'Shocked',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
    },
  },
  stunned: {
    name: 'Stunned',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: 4,
    stats: {
      ...ZERO_STATS,
      queueConsolidationModifier: -1,
    },
  },
  // TODO: Wet Status
  wet: {
    name: 'Wet',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
    },
  },
  'armor-up': {
    name: 'Armor Up',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      armor: 5,
    },
  },
  'attack-up': {
    name: 'Attack Up',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      attackDamageOffset: 5,
    },
  },
  'evade-up': {
    name: 'Evade Up',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      evasion: 15,
    },
  },
  'resistance-up': {
    name: 'Resistance Up',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      resistance: 5,
    },
  },
  'speed-up': {
    name: 'Speed Up',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      agility: 15,
    },
  },
  'armor-down': {
    name: 'Armor Down',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      armor: -5,
    },
  },
  'attack-down': {
    name: 'Attack Down',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      attackDamageOffset: -5,
    },
  },
  'evade-down': {
    name: 'Evade Down',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      evasion: -15,
    },
  },
  'resistance-down': {
    name: 'Resistance Down',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      resistance: -5,
    },
  },
  'speed-down': {
    name: 'Speed Down',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      agility: -15,
    },
  },
  rushed: {
    name: 'Rushed',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: 1,
    stats: {
      ...ZERO_STATS,
      queueValueSet: 0,
    },
  },
  interrupted: {
    name: 'Interrupted',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: 1,
    stats: {
      ...ZERO_STATS,
      queueValueSet: 70,
    },
  },
  reset: {
    name: 'Reset',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: 1,
    stats: {
      ...ZERO_STATS,
      queueValueSet: 100,
    },
  },
  evasive: {
    name: 'Evasive',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
    },
  },
  resilient: {
    name: 'Resilient',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
    },
  },
  protected: {
    name: 'Protected',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
    },
  },
  targeted: {
    name: 'Targeted',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: 6,
    stats: {
      ...ZERO_STATS,
    },
  },
}
