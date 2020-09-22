import Bee from '../../../icons/svg/lorc/snake.svg'
import { tCharacter } from '../type'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'

export const FOREST_SNAKE = (): tCharacter => {
  return makeEnemy(
    'Forest Snake',
    Bee,
    1,
    6,
    makeEnemyWeapon('dexterity', 12, 'melee', 'physical', [
      createSkill('Bite', 3, 0),
      createSkill('Venomous Bite', 3, -10, { perfectStatus: ['poisoned'] }),
    ]),
    {
      dexterity: 52,
      agility: getRandom([78, 79, 80, 81, 82, 83]),
      evasion: 17,
    },
    [],
    [
      makeEnemyReward(5, 4),
      makeEnemyReward(5, 8, [getRandomItem(0)]),
      makeEnemyReward(5, 10, [getRandomItem(1)]),
    ],
  )
}
