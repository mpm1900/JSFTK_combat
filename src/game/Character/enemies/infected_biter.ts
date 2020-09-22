import Icon from '../../../icons/svg/delapouite/carnivorous-plant.svg'
import { tCharacter } from '../type'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'

export const INFECTED_BITER = (): tCharacter => {
  return makeEnemy(
    'Infected Biter',
    Icon,
    1,
    19,
    makeEnemyWeapon('strength', 15, 'melee', 'physical', [
      createSkill('Bite', 3, 0),
      createSkill('Poison Breath', 4, -10, {
        targetType: 'group',
        damage: false,
        damageModifier: 0,
        perfectStatus: ['poisoned'],
      }),
    ]),
    {
      strength: 60,
      agility: getRandom([73, 74, 75, 76]),
      evasion: 7,
    },
    [],
    [
      makeEnemyReward(8, 8),
      makeEnemyReward(8, 9, [getRandomItem(1)]),
      makeEnemyReward(8, 10, [getRandomItem(1)]),
    ],
  )
}
