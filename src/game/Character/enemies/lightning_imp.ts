import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import Icon from '../../../icons/svg/lorc/imp.svg'
import { createSkill } from '../../Skill/skills'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'

export const LIGHTNING_IMP = () =>
  makeEnemy(
    'Lightning Imp',
    Icon,
    4,
    25,
    makeEnemyWeapon('dexterity', 28, 'ranged', 'magic', [
      createSkill('Shock', 3, -5, {
        perfectStatus: ['shocked'],
      }),
      createSkill('Claw Swipe', 3, 0),
    ]),
    {
      dexterity: 75,
      agility: getRandom([75, 76, 77, 78, 79, 80]),
      evasion: 37,
      resistance: 6,
      armor: 6,
    },
    ['flying'],
    [
      makeEnemyReward(50, 40),
      makeEnemyReward(50, 40),
      makeEnemyReward(80, 40, [getRandomItem(3, 3)]),
      makeEnemyReward(100, 50, [getRandomItem(4, 3)]),
    ],
  )
