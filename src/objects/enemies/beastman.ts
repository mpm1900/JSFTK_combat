import { CharacterT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { IMPALE } from '../skills/enemy/impale'

export const BEASTMAN = (): CharacterT => {
  return {
    ...makeEntity('Beastman'),
    isCharacter: true,
    partyId: '',
    level: 1,
    class: 'enemy',
    stats: {
      vigor: -80,
      strength: 52,
      intelligence: 40,
      perception: 52,
      talent: 30,
      agility: 60,
      luck: 50,
      armor: 2,
      resistance: 0,
      evasion: 10,
      healthOffset: 0,
      health: 0,
      healthRegen: 0,
      criticalChance: 5,
      damageModifier: 0,
      damageOffset: 0,
      damageReflection: 0,
      weaknessModifier: 0,
      goldModifier: 0,
      consumableHealthGainOffset: 0,
    },
    traits: [],
    armor: [],
    status: [],
    consumables: [],
    immunities: [],
    weapon: {
      ...makeEntity('Beastman Spear'),
      itemType: 'weapon',
      rarity: 'common',
      type: 'spear',
      twoHand: true,
      attackType: 'melee',
      damage: {
        damage: 8,
        type: 'physical',
      },
      traits: [],
      skills: [IMPALE],
    },
  }
}
