import Raven from '../../../icons/svg/lorc/raven.svg'
import { tCharacter } from '../type'
import { PECK } from '../../Skill/enemy/peck'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { CAW } from '../../Skill/enemy/caw'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { ZERO_STATS } from '../../Stats/constants'

export const FOREST_RAVEN = (): tCharacter => {
  return makeEnemy(
    'Forest Raven',
    Raven,
    1,
    10,
    makeEnemyWeapon('dexterity', 6, 'melee', 'physical', [PECK, CAW]),
    {
      dexterity: 56,
      agility: getRandom([74, 75, 76, 77, 78]),
      evasion: 10,
    },
    [],
    [
      makeEnemyReward(0, 5),
      makeEnemyReward(3, 7),
      makeEnemyReward(3, 7),
      makeEnemyReward(3, 7),
      makeEnemyReward(0, 7, [getRandomItem(0)]),
      makeEnemyReward(0, 7, [getRandomItem(1)]),
    ],
    [],
    [
      {
        duration: -1,
        type: 'evasive',
        stats: ZERO_STATS,
        stack: 0,
        immunities: [],
      },
    ],
  )
}
