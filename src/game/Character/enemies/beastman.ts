import BeastMan from '../../../icons/svg/delapouite/orc-head.svg'
import { tCharacter } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS, BASE_C_STATS } from '../../Stats/constants'
import { IMPALE } from '../../Skill/objects/enemy/impale'
import { getRandom } from '../../../util'
import { ALL_WEAPONS } from '../../Weapon/constants'
import { ALL_ARMOR } from '../../Armor/objects'

export const BEASTMAN = (): tCharacter => {
  return {
    id: v4(),
    name: 'Beastman',
    isCharacter: true,
    icon: BeastMan,
    partyId: '',
    level: 1,
    experience: 0,
    class: 'enemy',
    healthOffset: 0,
    inspirationOffset: 0,
    tags: [],
    stats: {
      ...BASE_C_STATS,
      vigor: -80,
      strength: 52,
      intelligence: 40,
      dexterity: 52,
      charisma: 30,
      agility: 60,
      luck: 50,
      armor: 2,
      resistance: 0,
      evasion: 10,
    },
    armor: [],
    status: [],
    consumables: [],
    immunities: [],
    weapon: {
      id: v4(),
      name: 'Beastman Spear',
      itemType: 'weapon',
      rarity: 'common',
      type: 'spear',
      stat: 'strength',
      twoHand: true,
      breakable: false,
      damage: {
        value: 8,
        range: 'melee',
        type: 'physical',
      },
      stats: ZERO_STATS,
      skills: [IMPALE],
      immunities: [],
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
