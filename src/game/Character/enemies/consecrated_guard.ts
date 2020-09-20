import { getRandom } from '../../../util'
import Skull from '../../../icons/svg/lorc/daemon-skull.svg'
import { tCharacter } from '../type'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'

export const CONSECRATED_GUARD = (): tCharacter => {
  return makeEnemy(
    'Consecrated Guard',
    Skull,
    6,
    48,
    makeEnemyWeapon('strength', 34, 'melee', 'physical', [
      createSkill('Beast Claw', 4, 0, { perfectStatus: ['attack-down'] }),
      createSkill('Beast Bite', 3, -10, { perfectPierce: true }),
    ]),
    {
      strength: 78,
      agility: getRandom([69, 70, 71, 72, 73, 74]),
      armor: 8,
      resistance: 8,
      evasion: 17,
    },
    ['undead'],
    [
      makeEnemyReward(100, 40),
      makeEnemyReward(100, 40),
      makeEnemyReward(180, 40),
      makeEnemyReward(180, 40, [getRandomItem(3, 3)]),
      makeEnemyReward(200, 50, [getRandomItem(4, 3)]),
    ],
  )
}
