import BeastMan from '../../../icons/svg/delapouite/orc-head.svg'
import { tCharacter } from '../type'
import { BASE_C_STATS } from '../../Stats/constants'
import { IMPALE } from '../../Skill/enemy/impale'
import { getRandom } from '../../../util'
import { ZERO_REWARD } from '../../Encounter/constants'
import { BASE_CHARACTER } from '../constants'
import { BASE_WEAPON } from '../../Weapon/constants'
import { getRandomItem } from '../../Item/util'

export const BEASTMAN = (): tCharacter => {
  return {
    ...BASE_CHARACTER(),
    name: 'Beastman',
    icon: BeastMan,
    level: 1,
    stats: {
      ...BASE_C_STATS,
      vigor: -80,
      strength: 52,
      intelligence: 40,
      dexterity: 52,
      charisma: 30,
      agility: getRandom([55, 56, 57, 58, 59, 60, 61]),
      luck: 50,
      armor: 2,
      resistance: 0,
      evasion: 10,
    },
    weapon: {
      ...BASE_WEAPON(),
      name: 'Beastman Spear',
      type: 'enemy',
      stat: 'strength',
      damage: {
        value: 8,
        range: 'melee',
        type: 'physical',
      },
      skills: [IMPALE],
    },
    possibleRewards: [
      {
        ...ZERO_REWARD,
        gold: 6,
        xp: 5,
      },
      {
        ...ZERO_REWARD,
        gold: 7,
        xp: 7,
      },
      {
        ...ZERO_REWARD,
        gold: 7,
        xp: 7,
      },
      {
        ...ZERO_REWARD,
        gold: 10,
        xp: 8,
      },
      {
        ...ZERO_REWARD,
        gold: 10,
        xp: 8,
      },
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 10,
        items: [getRandomItem(1)],
      },
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 10,
        items: [getRandomItem(1)],
      },
    ],
  }
}
