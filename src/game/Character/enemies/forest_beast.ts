import BeastMan from '../../../icons/svg/lorc/werewolf.svg'
import { tCharacter } from '../type'
import { BASE_C_STATS } from '../../Stats/constants'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'

export const FOREST_BEAST = (): tCharacter => {
  return makeEnemy(
    'Forest Beast',
    BeastMan,
    1,
    12,
    makeEnemyWeapon('strength', 10, 'melee', 'physical', [
      createSkill('Strike', 2, 0),
      createSkill('Impale', 4, -5, { perfectStatus: ['bleeding'] }),
    ]),
    {
      ...BASE_C_STATS,
      strength: 52,
      agility: getRandom([55, 56, 57, 58, 59, 60, 61]),
      armor: 3,
      evasion: 10,
    },
    ['beast'],
    [
      makeEnemyReward(6, 5),
      makeEnemyReward(6, 6),
      makeEnemyReward(7, 7),
      makeEnemyReward(7, 10),
      makeEnemyReward(8, 10),
      makeEnemyReward(9, 10, [getRandomItem(0)]),
      makeEnemyReward(10, 10, [getRandomItem(1)]),
    ],
  )
}
