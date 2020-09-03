import { CharacterT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { BITE } from '../skills/enemy/bite'

export const VALE_IMP = (): CharacterT => {
  return {
    ...makeEntity('Vale Imp'),
    isCharacter: true,
    partyId: '',
    level: 1,
    class: 'enemy',
    stats: {
      vigor: -80,
      strength: 40,
      intelligence: 40,
      perception: 52,
      talent: 30,
      agility: 70,
      luck: 50,
      armor: 0,
      resistance: 0,
      evasion: 10,
      health: 0,
      healthOffset: 0,
      healthRegen: 0,
      criticalChance: 5,
      damageModifier: 0,
    },
    traits: [],
    tags: [
      {
        duration: -1,
        type: 'evasive',
      },
    ],
    armor: [],
    status: [],
    weapon: {
      ...makeEntity('Imp Fists'),
      rarity: 'common',
      type: 'imp-fists',
      twoHand: true,
      attackType: 'melee',
      damage: {
        damage: 6,
        type: 'physical',
      },
      traits: [],
      skills: [BITE],
    },
  }
}
