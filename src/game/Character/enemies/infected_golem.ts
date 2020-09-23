import { getRandom } from '../../../util'
import Icon from '../../../icons/svg/delapouite/shambling-mound.svg'
import { tCharacter } from '../type'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'

export const INFECTED_GOLEM = (): tCharacter => {
  return makeEnemy(
    'Infected Golem',
    Icon,
    6,
    53,
    makeEnemyWeapon('strength', 28, 'melee', 'physical', [
      createSkill('Smash', 5, 0),
      createSkill('Quake', 5, -15, {
        damageModifier: 0.6,
        targetType: 'group',
        perfectStatus: ['stunned'],
      }),
    ]),
    {
      strength: 80,
      agility: getRandom([58, 59, 60, 61]),
      armor: 0,
      resistance: 0,
      evasion: 3,
    },
    [],
    [
      makeEnemyReward(70, 40),
      makeEnemyReward(70, 40),
      makeEnemyReward(90, 50, [getRandomItem(4, 3)]),
    ],
  )
}
