import Icon from '../../../icons/svg/delapouite/kenku-head.svg'
import { tCharacter } from '../type'
import { STAB } from '../../Skill/enemy/stab'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { IMPALE } from '../../Skill/enemy/impale'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'

export const CULTIST_BRUTE = (): tCharacter => {
  return makeEnemy(
    'Cultist Brute',
    Icon,
    4,
    26,
    makeEnemyWeapon('strength', 12, 'melee', 'physical', [STAB, IMPALE]),
    {
      strength: 72,
      agility: getRandom([75, 76, 77, 78, 79, 80, 81, 82]),
      armor: 6,
      resistance: 2,
      evasion: 13,
    },
    [],
    [
      makeEnemyReward(10, 12),
      makeEnemyReward(15, 13),
      makeEnemyReward(15, 13),
      makeEnemyReward(15, 13),
      makeEnemyReward(20, 20),
      makeEnemyReward(20, 20, [getRandomItem(2)]),
    ],
  )
}
