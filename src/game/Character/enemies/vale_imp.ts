import Imp from '../../../icons/svg/lorc/imp-laugh.svg'
import { tCharacter } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS, BASE_C_STATS } from '../../Stats/constants'
import { SLAP } from '../../Skill/objects/enemy/slap'
import { getRandom } from '../../../util'
import { ZERO_REWARD } from '../../Encounter/constants'

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
      agility: getRandom([74, 75, 76, 77, 78]),
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
      goldValue: 0,
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
        ...ZERO_REWARD,
        gold: 0,
        xp: 5,
      },
      {
        ...ZERO_REWARD,
        gold: 3,
        xp: 7,
      },
      {
        ...ZERO_REWARD,
        gold: 3,
        xp: 7,
      },
      {
        ...ZERO_REWARD,
        gold: 3,
        xp: 7,
      },
      {
        ...ZERO_REWARD,
        gold: 0,
        xp: 7,
        items: [],
      },
      {
        ...ZERO_REWARD,
        gold: 0,
        xp: 7,
        items: [],
      },
    ],
  }
}
