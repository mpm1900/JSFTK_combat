import { getRandom } from '../../../util'
import Troll from '../../../icons/svg/skoll/troll.svg'
import { tCharacter } from '../type'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'

export const FOREST_TROLL = (): tCharacter => {
  return makeEnemy(
    'Forest Troll',
    Troll,
    2,
    24,
    makeEnemyWeapon('strength', 16, 'melee', 'physical', [
      createSkill('Smash', 4, 0),
      createSkill('Quake', 5, -15, {
        damageModifier: 0.5,
        targetType: 'group',
        perfectStatus: ['stunned'],
      }),
    ]),
    {
      strength: 76,
      agility: getRandom([59, 60, 61, 62, 63, 64]),
      armor: 3,
      resistance: 0,
      evasion: 10,
    },
    [],
    [
      makeEnemyReward(8, 15),
      makeEnemyReward(9, 15, [getRandomItem(0)]),
      makeEnemyReward(10, 15, [getRandomItem(1)]),
    ],
  )
}
