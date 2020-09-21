import {
  makeEnemy,
  makeEnemyReward,
  makeEnemyWeapon,
} from '../enemies/_builder'
import Mimic from '../../../icons/svg/delapouite/mimic-chest.svg'
import { createSkill } from '../../Skill/skills'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'
import { GODSBEARD } from '../../Consumable/objects/godsbeard'

export const MIMIC_FLOOR_1 = () =>
  makeEnemy(
    'Mimic',
    Mimic,
    4,
    60,
    makeEnemyWeapon('strength', 24, 'melee', 'magic', [
      createSkill('Bite', 5, 0),
    ]),
    {
      strength: 40,
      agility: getRandom([65, 66, 67, 68, 69, 70]),
      evasion: 7,
      armor: 4,
      resistance: 4,
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
