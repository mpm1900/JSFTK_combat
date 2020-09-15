import Cultist from '../../../icons/svg/lorc/cultist.svg'
import { tCharacter } from '../type'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'

export const CULTIST_BRUTE = (): tCharacter => {
  return makeEnemy(
    'Cultist Brute',
    Cultist,
    4,
    26,
    makeEnemyWeapon('strength', 12, 'melee', 'physical', [
      createSkill('Slice', 3, 0),
      createSkill('Slash', 4, -5, { perfectStatus: ['bleeding'] }),
    ]),
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
      makeEnemyReward(25, 20, [getRandomItem(2)]),
    ],
  )
}
