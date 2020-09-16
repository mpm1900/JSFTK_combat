import Witch from '../../../icons/svg/lorc/witch-flight.svg'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { createSkill } from '../../Skill/skills'
import { tStatusType } from '../../Status/type'
import { tCharacter } from '../type'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'

export const FOREST_WITCH = (): tCharacter => {
  return makeEnemy(
    'Forest Witch',
    Witch,
    1,
    9,
    makeEnemyWeapon('intelligence', 9, 'ranged', 'magic', [
      createSkill('Curse', 2, -10, {
        damage: false,
        damageModifier: 0,
        perfectStatus: [
          getRandom<tStatusType>([
            'cursed-agility',
            'cursed-charisma',
            'cursed-dexterity',
            'cursed-intelligence',
            'cursed-luck',
            'cursed-strength',
          ]),
        ],
      }),
      createSkill('Blast', 3, 0),
    ]),
    {
      intelligence: 84,
      agility: getRandom([60, 62, 64, 66, 68]),
      resistance: 2,
      evasion: 10,
    },
    [],
    [
      makeEnemyReward(5, 15),
      makeEnemyReward(5, 15),
      makeEnemyReward(20, 15),
      makeEnemyReward(20, 15),
      makeEnemyReward(20, 15, [getRandomItem(1)]),
    ],
  )
}
