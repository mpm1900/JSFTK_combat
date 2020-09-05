import { CharacterT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { BITE } from '../skills/enemy/bite'
import { getRandom } from '../../util'
import { ALL_WEAPONS } from '../weapons'
import { ALL_ARMOR } from '../armor/index'

export const TIMBERWOLF = (): CharacterT => {
  return {
    ...makeEntity('Timberwolf'),
    isCharacter: true,
    partyId: '',
    level: 1,
    xp: 0,
    class: 'enemy',
    stats: {
      vigor: -80,
      strength: 52,
      intelligence: 40,
      perception: 52,
      talent: 30,
      agility: 65,
      luck: 50,
      armor: 0,
      resistance: 0,
      evasion: 10,
      healthOffset: 0,
      health: -1,
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
    immunities: [],
    weapon: {
      ...makeEntity('Wolf Fangs'),
      itemType: 'weapon',
      rarity: 'common',
      type: 'wolf-fangs',
      twoHand: true,
      attackType: 'melee',
      damage: {
        damage: 7,
        type: 'physical',
      },
      traits: [],
      skills: [BITE],
    },
    possibleRewards: [
      {
        gold: 4,
        xp: 10,
        items: [],
        consumables: [],
      },
      {
        gold: 4,
        xp: 10,
        items: [],
        consumables: [],
      },
      {
        gold: 4,
        xp: 10,
        items: [getRandom([...ALL_WEAPONS, ...ALL_ARMOR])],
        consumables: [],
      },
    ],
  }
}
