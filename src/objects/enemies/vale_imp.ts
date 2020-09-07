import { CharacterT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { SLAP } from '../skills/enemy/slap'
import { getRandom } from '../../util'
import { ALL_WEAPONS } from '../weapons'
import { ALL_ARMOR } from '../armor/index'
import Imp from '../../icons/svg/lorc/imp-laugh.svg'

export const VALE_IMP = (): CharacterT => {
  return {
    ...makeEntity('Vale Imp'),
    isCharacter: true,
    icon: Imp,
    partyId: '',
    level: 1,
    xp: 0,
    class: 'enemy',
    stats: {
      vigor: -80,
      strength: 40,
      intelligence: 40,
      perception: 52,
      talent: 30,
      agility: 76,
      luck: 50,
      armor: 0,
      resistance: 0,
      evasion: 10,
      health: 0,
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
    status: [
      {
        duration: -1,
        type: 'evasive',
      },
    ],
    immunities: [],
    weapon: {
      ...makeEntity('Imp Fists'),
      itemType: 'weapon',
      rarity: 'common',
      type: 'enemy',
      twoHand: true,
      attackType: 'melee',
      damage: {
        damage: 6,
        type: 'physical',
      },
      traits: [],
      skills: [SLAP],
    },
    possibleRewards: [
      {
        gold: 0,
        xp: 15,
        items: [],
        consumables: [],
      },
      {
        gold: 1,
        xp: 12,
        items: [],
        consumables: [],
      },
      {
        gold: 0,
        xp: 15,
        items: [getRandom(ALL_ARMOR())],
        consumables: [],
      },
      {
        gold: 0,
        xp: 15,
        items: [getRandom(ALL_WEAPONS())],
        consumables: [],
      },
    ],
  }
}
