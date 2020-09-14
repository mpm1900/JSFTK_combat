import { getRandom } from '../../../util'
import Bandit from '../../../icons/svg/delapouite/bandit.svg'
import { tCharacter } from '../type'
import { BASE_C_STATS } from '../../Stats/constants'
import { STAB } from '../../Skill/enemy/stab'
import { ZERO_REWARD } from '../../Encounter/constants'
import { BASE_CHARACTER } from '../constants'
import { BASE_WEAPON } from '../../Weapon/constants'
import { getRandomItem } from '../../Item/util'

export const BANDIT = (): tCharacter => {
  return {
    ...BASE_CHARACTER(),
    name: 'Bandit',
    icon: Bandit,
    level: 2,
    stats: {
      ...BASE_C_STATS,
      strength: 76,
      vigor: 50,
      intelligence: 40,
      dexterity: 52,
      charisma: 72,
      agility: getRandom([59, 60, 61, 62, 63, 64]),
      luck: 50,
      armor: 4,
      resistance: 0,
      evasion: 10,
      maxHealthOffset: -20,
    },
    weapon: {
      ...BASE_WEAPON(),
      name: 'Buccaneer Dagger',
      type: 'enemy',
      stat: 'strength',
      damage: {
        value: 12,
        range: 'melee',
        type: 'physical',
      },
      skills: [STAB],
    },
    possibleRewards: [
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 5,
      },
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 5,
      },
      {
        ...ZERO_REWARD,
        gold: 8,
        xp: 10,
      },
      {
        ...ZERO_REWARD,
        gold: 8,
        xp: 10,
      },
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 15,
        items: [getRandomItem(1)],
      },
      {
        ...ZERO_REWARD,
        gold: 80,
        xp: 15,
        items: [getRandomItem(1)],
      },
    ],
  }
}
