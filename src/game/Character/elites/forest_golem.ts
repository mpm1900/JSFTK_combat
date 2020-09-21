import {
  makeEnemy,
  makeEnemyReward,
  makeEnemyWeapon,
} from '../enemies/_builder'
import Golem from '../../../icons/svg/delapouite/golem-head.svg'
import { createSkill } from '../../Skill/skills'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { GODSBEARD } from '../../Consumable/objects/godsbeard'

export const FOREST_GOLEM = () =>
  makeEnemy(
    'Forest Golem',
    Golem,
    4,
    44,
    makeEnemyWeapon('strength', 18, 'melee', 'magic', [
      createSkill('Smash', 5, 0),
      createSkill('Quake', 5, -10, {
        damageModifier: 0.6,
        targetType: 'group',
        perfectStatus: ['stunned'],
      }),
    ]),
    {
      strength: 70,
      agility: getRandom([65, 66, 67, 68, 69, 70]),
      evasion: 7,
      armor: 0,
      resistance: 0,
    },
    [],
    [
      makeEnemyReward(150, 60, [
        getRandomItem(3, 2),
        getRandomItem(3, 2),
        GODSBEARD(),
      ]),
    ],
    ['bleeding', 'poisoned'],
  )
