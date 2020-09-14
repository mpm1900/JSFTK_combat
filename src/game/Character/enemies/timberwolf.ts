import Wolf from '../../../icons/svg/lorc/wolf-head.svg'
import { tCharacter } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS, BASE_C_STATS } from '../../Stats/constants'
import { BITE } from '../../Skill/enemy/bite'
import { getRandom } from '../../../util'
import { ZERO_REWARD } from '../../Encounter/constants'
import { BASE_CHARACTER } from '../constants'
import { BASE_WEAPON } from '../../Weapon/constants'
import { getRandomItem } from '../../Item/util'

export const TIMBERWOLF = (): tCharacter => {
  return {
    ...BASE_CHARACTER(),
    name: 'Timberwolf',
    icon: Wolf,
    level: 1,
    stats: {
      ...BASE_C_STATS,
      vigor: -80,
      strength: 52,
      intelligence: 40,
      dexterity: 52,
      charisma: 30,
      agility: getRandom([60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70]),
      luck: 50,
      armor: 0,
      resistance: 0,
      evasion: 10,
      maxHealthOffset: -1,
    },
    weapon: {
      ...BASE_WEAPON(),
      name: 'Wolf Fangs',
      type: 'enemy',
      stat: 'dexterity',
      damage: {
        value: 7,
        range: 'melee',
        type: 'physical',
      },
      skills: [BITE],
    },
    possibleRewards: [
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 3,
      },
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 3,
      },
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 3,
      },
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 3,
      },
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 3,
      },
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 3,
        items: [getRandomItem(0)],
      },
      {
        ...ZERO_REWARD,
        gold: 19,
        xp: 3,
        items: [getRandomItem(0)],
      },
    ],
  }
}
