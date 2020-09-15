import Wolf from '../../../icons/svg/lorc/wolf-head.svg'
import { tCharacter } from '../type'
import { BITE } from '../../Skill/enemy/bite'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'

export const FOREST_WOLF = (): tCharacter => {
  return makeEnemy(
    'Forest Wolf',
    Wolf,
    1,
    9,
    makeEnemyWeapon('dexterity', 7, 'melee', 'physical', [BITE]),
    {
      dexterity: 52,
      agility: getRandom([60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70]),
      evasion: 10,
    },
    [],
    [
      makeEnemyReward(4, 3),
      makeEnemyReward(4, 3),
      makeEnemyReward(4, 3),
      makeEnemyReward(4, 3),
      makeEnemyReward(4, 3),
      makeEnemyReward(4, 3, [getRandomItem(0)]),
      makeEnemyReward(16, 6, [getRandomItem(0)]),
    ],
  )
}
