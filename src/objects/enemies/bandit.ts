import { CharacterT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { STAB } from '../skills/enemy/stab'
import { EXPLORERS_BOOTS } from '../armor/explorers_boots'
import { EXPLORERS_HAT } from '../armor/explorers_hat'
import { EXPLORERS_CLOAK } from '../armor/explorers_cloak'

export const BANDIT = (): CharacterT => {
  return {
    ...makeEntity('Bandit'),
    isCharacter: true,
    partyId: '',
    level: 2,
    xp: 0,
    class: 'enemy',
    stats: {
      strength: 76,
      vigor: 50,
      intelligence: 40,
      perception: 52,
      talent: 72,
      agility: 61,
      luck: 50,
      armor: 4,
      resistance: 0,
      evasion: 10,
      healthOffset: 0,
      health: -20,
      healthRegen: 0,
      criticalChance: 5,
      damageModifier: 0,
      damageOffset: 0,
      damageReflection: 0,
      weaknessModifier: 0,
      goldModifier: 0,
      consumableHealthGainOffset: 15,
    },
    traits: [],
    armor: [],
    consumables: [],
    status: [],
    immunities: [],
    weapon: {
      ...makeEntity('Buccaneer Dagger'),
      itemType: 'weapon',
      rarity: 'common',
      type: 'dagger',
      twoHand: false,
      attackType: 'melee',
      damage: {
        damage: 12,
        type: 'physical',
      },
      traits: [],
      skills: [STAB],
    },
    possibleRewards: [
      {
        gold: 20,
        xp: 20,
        items: [],
        consumables: [],
      },
      {
        gold: 20,
        xp: 20,
        items: [EXPLORERS_BOOTS],
        consumables: [],
      },
      {
        gold: 20,
        xp: 20,
        items: [EXPLORERS_HAT],
        consumables: [],
      },
      {
        gold: 20,
        xp: 20,
        items: [EXPLORERS_CLOAK],
        consumables: [],
      },
    ],
  }
}
