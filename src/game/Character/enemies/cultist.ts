import { getRandom } from '../../../util'
import Cultist from '../../../icons/svg/lorc/cultist.svg'
import { tCharacter } from '../type'
import { TORCH } from '../../Skill/enemy/torch'
import { getRandomItem } from '../../Item/util'
import { ARCANE } from '../../Skill/skills/catalyst'
import { BLAST } from '../../Skill/enemy/arcane'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'

export const CULTIST = (): tCharacter => {
  return makeEnemy(
    'Cultist',
    Cultist,
    2,
    17,
    makeEnemyWeapon('intelligence', 14, 'melee', 'magic', [
      TORCH,
      ARCANE,
      BLAST,
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
