import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import FireWhisp from '../../../icons/svg/lorc/unfriendly-fire.svg'
import { createSkill } from '../../Skill/skills'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { ZERO_STATS } from '../../Stats/constants'

export const FLAME_WISP = () =>
  makeEnemy(
    'Flame Wisp',
    FireWhisp,
    4,
    15,
    makeEnemyWeapon('intelligence', 26, 'ranged', 'magic', [
      createSkill('Ember', 3, 0),
      createSkill('Engulf', 3, -10, { perfectStatus: ['burning'] }),
      createSkill('Fire Blast', 4, -10, {
        perfectStatus: ['burning'],
        targetType: 'group',
      }),
    ]),
    {
      intelligence: 75,
      agility: getRandom([70, 71, 72, 73, 74, 75]),
      evasion: 20,
      resistance: 7,
      armor: 7,
    },
    [],
    [
      makeEnemyReward(50, 40),
      makeEnemyReward(50, 40),
      makeEnemyReward(80, 40),
      makeEnemyReward(80, 40, [getRandomItem(3, 3)]),
      makeEnemyReward(100, 50, [getRandomItem(4, 3)]),
    ],
    ['burning'],
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
