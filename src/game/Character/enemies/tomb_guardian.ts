import { getRandom } from '../../../util'
import Skull from '../../../icons/svg/lorc/harry-potter-skull.svg'
import { tCharacter } from '../type'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'

export const TOMB_GUARDIAN = (): tCharacter => {
  return makeEnemy(
    'Tomb Guardian',
    Skull,
    5,
    36,
    makeEnemyWeapon('strength', 28, 'melee', 'physical', [
      createSkill('Smash', 4, 0),
      createSkill('Stun', 3, -5, {
        damage: false,
        damageModifier: 0,
        perfectStatus: ['stunned'],
      }),
      createSkill('Quake', 4, -15, {
        damageModifier: 0.5,
        targetType: 'group',
        perfectStatus: ['stunned'],
      }),
    ]),
    {
      strength: 78,
      agility: getRandom([59, 60, 61, 62, 63, 64]),
      armor: 10,
      resistance: 3,
      evasion: 10,
    },
    ['undead'],
    [
      makeEnemyReward(50, 40),
      makeEnemyReward(50, 40),
      makeEnemyReward(80, 40),
      makeEnemyReward(80, 40, [getRandomItem(3, 3)]),
      makeEnemyReward(100, 50, [getRandomItem(4, 3)]),
    ],
  )
}
