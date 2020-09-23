import { getRandom } from '../../../util'
import Cultist from '../../../icons/svg/lorc/cultist.svg'
import { tCharacter } from '../type'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'

export const CULTIST_SCHOLAR = (): tCharacter => {
  return makeEnemy(
    'Cultist Scholar',
    Cultist,
    5,
    29,
    makeEnemyWeapon('intelligence', 28, 'melee', 'magic', [
      createSkill('Enflame', 4, -10, { perfectStatus: ['burning'] }),
      createSkill('Arcane', 3, 0, { perfectPierce: true }),
    ]),
    {
      intelligence: 80,
      agility: getRandom([68, 69, 70, 71]),
      armor: 3,
      resistance: 8,
      evasion: 17,
    },
    [],
    [
      makeEnemyReward(70, 40),
      makeEnemyReward(70, 40),
      makeEnemyReward(90, 50, [getRandomItem(4, 3)]),
    ],
  )
}
