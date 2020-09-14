import Icon from '../../../icons/svg/delapouite/pirate-captain.svg'
import { tCharacter } from '../type'
import { BASE_C_STATS } from '../../Stats/constants'
import { STAB } from '../../Skill/enemy/stab'
import { getRandom } from '../../../util'
import { ZERO_REWARD } from '../../Encounter/constants'
import { BASE_CHARACTER } from '../constants'
import { BASE_WEAPON } from '../../Weapon/constants'
import { getRandomItem } from '../../Item/util'

export const BUCCANEER = (): tCharacter => {
  return {
    ...BASE_CHARACTER(),
    name: 'Buccaneer',
    icon: Icon,
    level: 4,
    stats: {
      ...BASE_C_STATS,
      strength: 52,
      vigor: 66,
      intelligence: 46,
      dexterity: 78,
      charisma: 64,
      agility: getRandom([75, 76, 77, 78, 79, 80, 81, 82]),
      luck: 50,
      armor: 6,
      resistance: 0,
      evasion: 20,
      maxHealthOffset: -34,
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
