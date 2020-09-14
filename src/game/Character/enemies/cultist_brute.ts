import Icon from '../../../icons/svg/delapouite/kenku-head.svg'
import { tCharacter } from '../type'
import { BASE_C_STATS } from '../../Stats/constants'
import { STAB } from '../../Skill/enemy/stab'
import { getRandom } from '../../../util'
import { ZERO_REWARD } from '../../Encounter/constants'
import { BASE_CHARACTER } from '../constants'
import { BASE_WEAPON } from '../../Weapon/constants'
import { getRandomItem } from '../../Item/util'
import { IMPALE } from '../../Skill/enemy/impale'

export const CULTIST_BRUTE = (): tCharacter => {
  return {
    ...BASE_CHARACTER(),
    name: 'Cultist Brute',
    icon: Icon,
    level: 4,
    stats: {
      ...BASE_C_STATS,
      strength: 72,
      vigor: 66,
      intelligence: 46,
      dexterity: 50,
      charisma: 64,
      agility: getRandom([75, 76, 77, 78, 79, 80, 81, 82]),
      luck: 50,
      armor: 6,
      resistance: 2,
      evasion: 20,
      maxHealthOffset: -37,
    },
    weapon: {
      ...BASE_WEAPON(),
      name: 'Cultist Axe',
      type: 'enemy',
      stat: 'strength',
      damage: {
        value: 12,
        range: 'melee',
        type: 'physical',
      },
      skills: [STAB, IMPALE],
    },
    possibleRewards: [
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 15,
      },
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 16,
      },
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 16,
      },
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 17,
        items: [],
      },
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 18,
        items: [getRandomItem(1)],
      },
      {
        ...ZERO_REWARD,
        gold: 80,
        xp: 20,
        items: [getRandomItem(2)],
      },
    ],
  }
}
