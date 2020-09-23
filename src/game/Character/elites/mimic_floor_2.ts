import {
  makeEnemy,
  makeEnemyReward,
  makeEnemyWeapon,
} from '../enemies/_builder'
import Mimic from '../../../icons/svg/delapouite/mimic-chest.svg'
import { createSkill } from '../../Skill/skills'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'

export const MIMIC_FLOOR_2 = () =>
  makeEnemy(
    'Mimic',
    Mimic,
    4,
    100,
    makeEnemyWeapon('strength', 38, 'melee', 'physical', [
      createSkill('Bite', 5, 0),
    ]),
    {
      strength: 40,
      agility: getRandom([65, 66, 67, 68, 69, 70]),
      evasion: 7,
      armor: 6,
      resistance: 6,
    },
    [],
    [makeEnemyReward(200, 200, [getRandomItem(4, 4)])],
    ['bleeding', 'poisoned'],
  )
