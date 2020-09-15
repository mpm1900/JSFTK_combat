import Bee from '../../../icons/svg/lorc/bee.svg'
import { tCharacter } from '../type'
import { getRandom } from '../../../util'
import { GODSBEARD } from '../../Consumable/objects/godsbeard'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'

export const BEE = (): tCharacter => {
  return makeEnemy(
    'Forest Bee',
    Bee,
    1,
    6,
    makeEnemyWeapon('dexterity', 12, 'melee', 'physical', [
      createSkill('Sting', 3, 0),
      createSkill('Infectious Sting', 3, -10, { perfectStatus: ['poisoned'] }),
    ]),
    {
      dexterity: 52,
      agility: getRandom([78, 79, 80, 81, 82, 83]),
      evasion: 17,
    },
    ['flying'],
    [
      makeEnemyReward(1, 4),
      makeEnemyReward(4, 8),
      makeEnemyReward(4, 8),
      makeEnemyReward(4, 8),
      makeEnemyReward(8, 8, [getRandomItem(0)]),
      makeEnemyReward(8, 10, [GODSBEARD()]),
    ],
  )
}
