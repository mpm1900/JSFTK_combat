import { getRandom } from '../../../util'
import Boar from '../../../icons/svg/lorc/boar-tusks.svg'
import { tCharacter } from '../type'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'

export const FOREST_BOAR = (): tCharacter => {
  return makeEnemy(
    'Forest Boar',
    Boar,
    2,
    27,
    makeEnemyWeapon('strength', 16, 'melee', 'physical', [
      createSkill('Ram', 4, 0),
      createSkill('Impale', 4, -15, {
        perfectPierce: true,
      }),
    ]),
    {
      strength: 76,
      agility: getRandom([59, 60, 61, 62, 63, 64]),
      armor: 0,
      resistance: 0,
      evasion: 17,
    },
    [],
    [
      makeEnemyReward(10, 10, [getRandomItem(0)]),
      makeEnemyReward(10, 15, [getRandomItem(1)]),
      makeEnemyReward(10, 15, [getRandomItem(2, 2)]),
    ],
  )
}
