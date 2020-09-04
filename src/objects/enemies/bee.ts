import { CharacterT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { STING, INFECTIOUS_STING } from '../skills/enemy/sting'

export const BEE = (): CharacterT => {
  return {
    ...makeEntity('Bee'),
    isCharacter: true,
    partyId: '',
    level: 1,
    class: 'enemy',
    stats: {
      vigor: -80,
      strength: 30,
      intelligence: 30,
      perception: 52,
      talent: 30,
      agility: 80,
      luck: 0,
      armor: 0,
      resistance: 0,
      evasion: 17,
      health: -4,
      healthOffset: 0,
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
    consumables: [],
    status: [],
    weapon: {
      ...makeEntity('Bee Stinger'),
      itemType: 'weapon',
      rarity: 'common',
      type: 'bee-stinger',
      twoHand: true,
      attackType: 'melee',
      damage: {
        damage: 12,
        type: 'physical',
      },
      traits: [],
      skills: [STING, INFECTIOUS_STING],
    },
  }
}
