import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import Icon from '../../../icons/svg/delapouite/fairy.svg'
import { createSkill } from '../../Skill/skills'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { ZERO_STATS } from '../../Stats/constants'

export const FOREST_FAIRY = () =>
  makeEnemy(
    'Dark Forest Faerie',
    Icon,
    4,
    20,
    makeEnemyWeapon('intelligence', 28, 'ranged', 'magic', [
      createSkill('Faerie Charm', 2, -5, {
        damage: false,
        damageModifier: 0,
        perfectStatus: ['attack-down'],
      }),
      createSkill('Blast', 3, 0),
      createSkill('Stun', 3, -10, {
        damage: false,
        damageModifier: 0,
        perfectStatus: ['stunned'],
        targetType: 'group',
      }),
    ]),
    {
      intelligence: 75,
      agility: getRandom([75, 76, 77, 78, 79, 80]),
      evasion: 20,
      resistance: 9,
      armor: 4,
    },
    ['flying'],
    [
      makeEnemyReward(50, 40),
      makeEnemyReward(50, 40),
      makeEnemyReward(80, 40, [getRandomItem(3, 3)]),
      makeEnemyReward(100, 50, [getRandomItem(4, 3)]),
    ],
    ['poisoned'],
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
