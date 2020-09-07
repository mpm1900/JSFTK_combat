import { CharacterT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { IMPALE } from '../skills/enemy/impale'
import { getRandom } from '../../util'
import { ALL_WEAPONS } from '../weapons'
import { ALL_ARMOR } from '../armor/index'
import BeastMan from '../../icons/svg/delapouite/orc-head.svg'

export const BEASTMAN = (): CharacterT => {
  return {
    ...makeEntity('Beastman'),
    isCharacter: true,
    icon: BeastMan,
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
    possibleRewards: [
      {
        gold: 6,
        xp: 15,
        items: [],
        consumables: [],
      },
      {
        gold: 6,
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
        gold: 6,
        xp: 15,
        items: [getRandom(ALL_WEAPONS())],
        consumables: [],
      },
      {
        gold: 19,
        xp: 20,
        items: [getRandom([...ALL_WEAPONS(), ...ALL_ARMOR()])],
        consumables: [],
      },
    ],
  }
}
