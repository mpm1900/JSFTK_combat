import Imp from '../../../icons/svg/lorc/imp-laugh.svg'
import { tCharacter } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS, BASE_C_STATS } from '../../Stats/constants'
import { SLAP } from '../../Skill/enemy/slap'
import { getRandom } from '../../../util'
import { ZERO_REWARD } from '../../Encounter/constants'
import { BASE_CHARACTER } from '../constants'
import { BASE_WEAPON } from '../../Weapon/constants'
import { getRandomItem } from '../../Item/util'

export const VALE_IMP = (): tCharacter => {
  return {
    ...BASE_CHARACTER(),
    name: 'Vale Imp',
    icon: Imp,
    level: 1,
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
    status: [
      {
        duration: -1,
        type: 'evasive',
        stats: ZERO_STATS,
        stack: 0,
        immunities: [],
      },
    ],
    weapon: {
      ...BASE_WEAPON(),
      name: 'Imp Fists',
      type: 'enemy',
      stat: 'dexterity',
      damage: {
        value: 6,
        range: 'melee',
        type: 'physical',
      },
      skills: [SLAP],
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
        items: [getRandomItem(0)],
      },
      {
        ...ZERO_REWARD,
        gold: 0,
        xp: 7,
        items: [getRandomItem(1)],
      },
    ],
  }
}
