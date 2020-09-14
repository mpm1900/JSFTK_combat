import Bee from '../../../icons/svg/lorc/bee.svg'
import { tCharacter } from '../type'
import { BASE_C_STATS } from '../../Stats/constants'
import { STING, INFECTIOUS_STING } from '../../Skill/enemy/sting'
import { getRandom } from '../../../util'
import { GODSBEARD } from '../../Consumable/objects/godsbeard'
import { ZERO_REWARD } from '../../Encounter/constants'
import { BASE_CHARACTER } from '../constants'
import { BASE_WEAPON } from '../../Weapon/constants'
import { getRandomItem } from '../../Item/util'

export const BEE = (): tCharacter => {
  return {
    ...BASE_CHARACTER(),
    name: 'Bee',
    icon: Bee,
    level: 1,
    tags: ['flying'],
    stats: {
      ...BASE_C_STATS,
      vigor: -80,
      strength: 30,
      intelligence: 30,
      dexterity: 52,
      charisma: 30,
      agility: getRandom([78, 79, 80, 81, 82, 83]),
      luck: 0,
      armor: 0,
      resistance: 0,
      evasion: 17,
      maxHealthOffset: -4,
    },
    weapon: {
      ...BASE_WEAPON(),
      name: 'Bee Stinger',
      type: 'enemy',
      stat: 'dexterity',
      damage: {
        value: 12,
        range: 'melee',
        type: 'physical',
      },
      skills: [STING, INFECTIOUS_STING],
    },
    possibleRewards: [
      {
        ...ZERO_REWARD,
        gold: 1,
        xp: 4,
      },
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 6,
      },
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 6,
      },
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 6,
      },
      {
        ...ZERO_REWARD,
        gold: 8,
        xp: 8,
        items: [getRandomItem(0)],
      },
      {
        ...ZERO_REWARD,
        gold: 0,
        xp: 10,
        items: [GODSBEARD()],
      },
    ],
  }
}
