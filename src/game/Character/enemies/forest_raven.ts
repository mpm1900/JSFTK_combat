import Raven from '../../../icons/svg/lorc/raven.svg'
import { tCharacter } from '../type'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { ZERO_STATS } from '../../Stats/constants'
import { createSkill } from '../../Skill/skills'

export const FOREST_RAVEN = (): tCharacter => {
  return makeEnemy(
    'Forest Raven',
    Raven,
    1,
    10,
    makeEnemyWeapon('dexterity', 6, 'melee', 'physical', [
      createSkill('Peck', 2, 0),
      createSkill('Caw', 2, -5, {
        perfectStatus: ['resistance-down', 'armor-down'],
      }),
    ]),
    {
      dexterity: 56,
      agility: getRandom([74, 75, 76, 77, 78]),
      evasion: 10,
    },
    ['flying'],
    [
      makeEnemyReward(3, 5),
      makeEnemyReward(4, 5, [getRandomItem(0)]),
      makeEnemyReward(4, 7, [getRandomItem(1)]),
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
