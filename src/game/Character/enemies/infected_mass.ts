import { getRandom } from '../../../util'
import Icon from '../../../icons/svg/lorc/infested-mass.svg'
import { tCharacter } from '../type'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'

export const INFECTED_MASS = (): tCharacter => {
  return makeEnemy(
    'Infected Mass',
    Icon,
    5,
    36,
    makeEnemyWeapon('strength', 28, 'melee', 'physical', [
      createSkill('Smash', 4, 0),
      createSkill('Poison Mist', 3, -5, {
        damageModifier: 0.2,
        perfectStatus: ['poisoned'],
      }),
      createSkill('Stunning Mist', 4, -15, {
        damageModifier: 0.5,
        targetType: 'group',
        perfectStatus: ['stunned'],
      }),
    ]),
    {
      strength: 78,
      agility: getRandom([59, 60, 61, 62, 63, 64]),
      armor: 8,
      resistance: 8,
      evasion: 5,
    },
    [],
    [
      makeEnemyReward(50, 40),
      makeEnemyReward(50, 40),
      makeEnemyReward(80, 40, [getRandomItem(3, 3)]),
      makeEnemyReward(100, 50, [getRandomItem(4, 3)]),
    ],
    ['poisoned'],
  )
}
