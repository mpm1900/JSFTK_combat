import { tStatusType, tStatusConfig } from './type'
import { ZERO_STATS } from '../Stats/constants'

export const STATUS_CONFIG: Record<tStatusType, tStatusConfig> = {
  bleeding: {
    name: 'Bleeding',
    description: '-10 HP on your turn.',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      healthRegeneration: -6,
    },
    immunities: [],
  },
  burning: {
    name: 'Burning',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      healthRegeneration: -6,
    },
    immunities: [],
  },
  // TODO: Different cursed status' for different stats
  'cursed-vigor': {
    name: 'Cursed',
    description: '-15 to Vigor',
    canStack: false,
    isTemporary: false,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      vigor: -15,
    },
    immunities: [],
  },
  'cursed-strength': {
    name: 'Cursed',
    description: '-15 to Strength',
    canStack: false,
    isTemporary: false,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      strength: -15,
    },
    immunities: [],
  },
  'cursed-dexterity': {
    name: 'Cursed',
    description: '-15 to Dexterity',
    canStack: false,
    isTemporary: false,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      dexterity: -15,
    },
    immunities: [],
  },
  'cursed-intelligence': {
    name: 'Cursed',
    description: '-15 to Intelligence',
    canStack: false,
    isTemporary: false,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      intelligence: -15,
    },
    immunities: [],
  },
  'cursed-charisma': {
    name: 'Cursed',
    description: '-15 to Charisma',
    canStack: false,
    isTemporary: false,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      charisma: -15,
    },
    immunities: [],
  },
  'cursed-agility': {
    name: 'Cursed',
    description: '-15 to Agility',
    canStack: false,
    isTemporary: false,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      agility: -15,
    },
    immunities: [],
  },
  'cursed-luck': {
    name: 'Cursed',
    description: '-15 to Luck',
    canStack: false,
    isTemporary: false,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      luck: -15,
    },
    immunities: [],
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
    immunities: [],
  },
  poisoned: {
    name: 'Poisoned',
    description: "-5 HP on this character's turn and -5 to each stat.",
    canStack: true,
    isTemporary: false,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      vigor: -5,
      strength: -5,
      intelligence: -5,
      dexterity: -5,
      charisma: -5,
      healthRegeneration: -3,
    },
    immunities: [],
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
    immunities: [],
  },
  stunned: {
    name: 'Stunned',
    description: 'This character will not progress on the battle timeline.',
    canStack: false,
    isTemporary: true,
    duration: 2,
    stats: {
      ...ZERO_STATS,
      queueConsolidationModifier: -1,
    },
    immunities: [],
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
    immunities: [],
  },
  'armor-up': {
    name: 'Armor Up',
    description: '+5 Armor',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      armor: 5,
    },
    immunities: [],
  },
  'attack-up': {
    name: 'Attack Up',
    description: '+15 Attack Damage',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      attackDamageOffset: 15,
    },
    immunities: [],
  },
  'evade-up': {
    name: 'Evade Up',
    description: '+15 Evasion',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      evasion: 15,
    },
    immunities: [],
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
    immunities: [],
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
    immunities: [],
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
    immunities: [],
  },
  'attack-down': {
    name: 'Attack Down',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      attackDamageOffset: -15,
    },
    immunities: [],
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
    immunities: [],
  },
  'resistance-down': {
    name: 'Resistance Down',
    description: '',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
      resistance: -15,
    },
    immunities: [],
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
    immunities: [],
  },
  rushed: {
    name: 'Rushed',
    description: 'Bring to front of queue.',
    canStack: false,
    isTemporary: true,
    duration: 1,
    stats: {
      ...ZERO_STATS,
      queueValueSet: 0,
    },
    immunities: [],
  },
  interrupted: {
    name: 'Interrupted',
    description: 'Set back 70 unites.',
    canStack: false,
    isTemporary: true,
    duration: 1,
    stats: {
      ...ZERO_STATS,
      queueValueSet: 70,
    },
    immunities: [],
  },
  reset: {
    name: 'Reset',
    description: 'Set back 100 units.',
    canStack: false,
    isTemporary: true,
    duration: 1,
    stats: {
      ...ZERO_STATS,
      queueValueSet: 100,
    },
    immunities: [],
  },
  evasive: {
    name: 'Evasive',
    description: 'Non-perfect attacks will miss when targeting this character.',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
    },
    immunities: [],
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
    immunities: [],
  },
  protected: {
    name: 'Protected',
    description: 'Negate the next bit of damage.',
    canStack: false,
    isTemporary: true,
    duration: -1,
    stats: {
      ...ZERO_STATS,
    },
    immunities: [],
  },
  targeted: {
    name: 'Targeted',
    description: 'All enemies will attack this player.',
    canStack: false,
    isTemporary: true,
    duration: 6,
    stats: {
      ...ZERO_STATS,
    },
    immunities: [],
  },
  cure: {
    name: 'Cure',
    description: 'Remove Poisoned, Bleeding, and Burning',
    canStack: false,
    isTemporary: true,
    duration: 1,
    stats: {
      ...ZERO_STATS,
    },
    immunities: ['poisoned', 'bleeding', 'burning', 'frozen', 'wet', 'shocked'],
  },
  blessed: {
    name: 'Blessed',
    description: 'Temporary Curse Immunity',
    canStack: false,
    isTemporary: true,
    duration: 1,
    stats: ZERO_STATS,
    immunities: [
      'cursed-agility',
      'cursed-charisma',
      'cursed-dexterity',
      'cursed-intelligence',
      'cursed-luck',
      'cursed-strength',
      'cursed-vigor',
    ],
  },
}
