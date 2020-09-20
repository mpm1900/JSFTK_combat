import { getRandom } from '../../../util'
import Cultist from '../../../icons/svg/lorc/cultist.svg'
import { tCharacter } from '../type'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'

export const CULTIST = (): tCharacter => {
  return makeEnemy(
    'Cultist',
    Cultist,
    2,
    17,
    makeEnemyWeapon('intelligence', 11, 'melee', 'magic', [
      createSkill('Enflame', 4, -10, { perfectStatus: ['burning'] }),
      createSkill('Arcane', 3, 0, { perfectPierce: true }),
    ]),
    {
      intelligence: 75,
      agility: getRandom([68, 69, 70, 71]),
      armor: 1,
      resistance: 4,
      evasion: 15,
    },
    [],
    [
      makeEnemyReward(10, 12),
      makeEnemyReward(15, 13),
      makeEnemyReward(15, 13),
      makeEnemyReward(15, 13),
      makeEnemyReward(30, 20),
      makeEnemyReward(30, 20, [getRandomItem(2)]),
    ],
  )
}
