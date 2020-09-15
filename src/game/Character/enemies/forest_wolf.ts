import Wolf from '../../../icons/svg/lorc/wolf-head.svg'
import { tCharacter } from '../type'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'

export const FOREST_WOLF = (): tCharacter => {
  return makeEnemy(
    'Forest Wolf',
    Wolf,
    1,
    9,
    makeEnemyWeapon('dexterity', 7, 'melee', 'physical', [
      createSkill('Bite', 3, 0),
      createSkill('Chomp', 4, 0, { perfectPierce: true }),
    ]),
    {
      dexterity: 52,
      agility: getRandom([55, 56, 57, 58, 59, 60, 61, 62, 63, 64]),
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
