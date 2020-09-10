import Imp from '../../../icons/svg/lorc/imp-laugh.svg'
import { tCharacter } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS, BASE_C_STATS } from '../../Stats/constants'
import { SLAP } from '../../Skill/objects/enemy/slap'
import { getRandom } from '../../../util'
import { ALL_WEAPONS } from '../../Weapon/constants'
import { ALL_ARMOR } from '../../Armor/objects'

export const VALE_IMP = (): tCharacter => {
  return {
    id: v4(),
    name: 'Vale Imp',
    isCharacter: true,
    icon: Imp,
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
      strength: 40,
      intelligence: 40,
      dexterity: 52,
      charisma: 30,
      agility: 76,
      luck: 50,
      armor: 0,
      resistance: 0,
      evasion: 10,
    },
    armor: [],
    consumables: [],
    status: [
      {
        duration: -1,
        type: 'evasive',
        stats: ZERO_STATS,
        stack: 0,
        immunities: [],
      },
    ],
    immunities: [],
    weapon: {
      id: v4(),
      name: 'Imp Fists',
      itemType: 'weapon',
      rarity: 'common',
      type: 'enemy',
      stat: 'dexterity',
      twoHand: true,
      breakable: false,
      damage: {
        value: 6,
        range: 'melee',
        type: 'physical',
      },
      stats: ZERO_STATS,
      skills: [SLAP],
      immunities: [],
    },
    possibleRewards: [
      {
        gold: 0,
        xp: 5,
        items: [],
        consumables: [],
      },
      {
        gold: 3,
        xp: 7,
        items: [],
        consumables: [],
      },
      {
        gold: 3,
        xp: 7,
        items: [],
        consumables: [],
      },
      {
        gold: 3,
        xp: 7,
        items: [],
        consumables: [],
      },
      {
        gold: 0,
        xp: 7,
        items: [getRandom(ALL_ARMOR())],
        consumables: [],
      },
      {
        gold: 0,
        xp: 7,
        items: [getRandom(ALL_WEAPONS())],
        consumables: [],
      },
    ],
  }
}
