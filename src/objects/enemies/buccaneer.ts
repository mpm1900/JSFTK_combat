import { CharacterT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { STAB } from '../skills/enemy/stab'

export const BUCCANEER = (): CharacterT => {
  return {
    ...makeEntity('Buccaneer'),
    isCharacter: true,
    partyId: '',
    level: 4,
    class: 'enemy',
    stats: {
      strength: 52,
      vigor: 66,
      intelligence: 46,
      perception: 78,
      talent: 64,
      agility: 78,
      luck: 50,
      armor: 1,
      resistance: 0,
      evasion: 20,
      healthOffset: 0,
      health: -31,
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
  }
}