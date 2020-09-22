import Icon from '../../../icons/svg/lorc/leeching-worm.svg'
import { tCharacter } from '../type'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { ZERO_STATS } from '../../Stats/constants'
import { createSkill } from '../../Skill/skills'

export const INFECTED_LEACH = (): tCharacter => {
  return makeEnemy(
    'Infected Leech',
    Icon,
    1,
    14,
    makeEnemyWeapon('dexterity', 6, 'melee', 'physical', [
      createSkill('Latch', 2, 0),
      createSkill('Leech', 2, -5, {
        perfectStatus: ['resistance-down', 'armor-down'],
      }),
    ]),
    {
      dexterity: 60,
      agility: getRandom([74, 75, 76, 77, 78]),
      evasion: 10,
    },
    ['flying'],
    [
      makeEnemyReward(4, 5),
      makeEnemyReward(5, 5, [getRandomItem(0)]),
      makeEnemyReward(7, 7, [getRandomItem(1)]),
    ],
    [],
    [
      {
        duration: -1,
        type: 'evasive',
        stats: ZERO_STATS,
        stack: 0,
        immunities: [],
      },
    ],
  )
}
