import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import Spider from '../../../icons/svg/delapouite/spider-eye.svg'
import { createSkill } from '../../Skill/skills'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'

export const TOMB_SPIDER = () =>
  makeEnemy(
    'Tomb Spider',
    Spider,
    4,
    22,
    makeEnemyWeapon('dexterity', 18, 'ranged', 'magic', [
      createSkill('Bite', 3, 0),
      createSkill('Venomous Bite', 3, -10, { perfectStatus: ['poisoned'] }),
      createSkill('Blood Bite', 3, -5, { perfectStatus: ['bleeding'] }),
    ]),
    {
      dexterity: 75,
      agility: getRandom([70, 71, 72, 73, 74, 75]),
      evasion: 20,
      resistance: 5,
      armor: 4,
    },
    [],
    [
      makeEnemyReward(50, 40),
      makeEnemyReward(50, 40),
      makeEnemyReward(80, 40),
      makeEnemyReward(80, 40, [getRandomItem(3, 3)]),
      makeEnemyReward(100, 50, [getRandomItem(4, 3)]),
    ],
    ['poisoned'],
  )
