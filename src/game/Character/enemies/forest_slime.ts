import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import Icon from '../../../icons/svg/delapouite/grasping-slug.svg'
import { createSkill } from '../../Skill/skills'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'

export const FOREST_SLIME = () =>
  makeEnemy(
    'Dark Forest Slime',
    Icon,
    4,
    22,
    makeEnemyWeapon('strength', 28, 'ranged', 'magic', [
      createSkill('Toxic', 3, -10, { perfectStatus: ['poisoned'] }),
      createSkill('Poison Mist', 4, -10, {
        perfectStatus: ['poisoned'],
        damageModifier: 0.2,
        targetType: 'group',
      }),
      createSkill('Slime Smash', 5, -5, {
        damageModifier: 1.4,
        splashDamageModifier: 0.4,
      }),
    ]),
    {
      strength: 75,
      agility: getRandom([60, 61, 62, 63, 64, 65]),
      evasion: 20,
      resistance: 5,
      armor: 6,
    },
    [],
    [
      makeEnemyReward(50, 40),
      makeEnemyReward(50, 40),
      makeEnemyReward(80, 40, [getRandomItem(3, 3)]),
      makeEnemyReward(100, 50, [getRandomItem(4, 3)]),
    ],
    ['poisoned', 'bleeding'],
  )
