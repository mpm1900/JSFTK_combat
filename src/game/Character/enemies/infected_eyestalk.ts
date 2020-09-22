import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import Icon from '../../../icons/svg/lorc/eyestalk.svg'
import { createSkill } from '../../Skill/skills'
import { getRandom } from '../../../util'
import { tStatusType } from '../../Status/type'
import { getRandomItem } from '../../Item/util'

export const INFECTED_EYESTALK = () =>
  makeEnemy(
    'Infected Eyestalk',
    Icon,
    4,
    28,
    makeEnemyWeapon('intelligence', 18, 'ranged', 'magic', [
      createSkill('Curse', 2, -10, {
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
      createSkill('Slam', 3, 0),
    ]),
    {
      intelligence: 80,
      agility: getRandom([65, 66, 67, 68, 69, 70]),
      evasion: 23,
      resistance: 5,
      armor: 4,
    },
    ['undead'],
    [
      makeEnemyReward(50, 20),
      makeEnemyReward(50, 20),
      makeEnemyReward(50, 40, [getRandomItem(2, 2)]),
      makeEnemyReward(50, 50, [getRandomItem(3, 3)]),
    ],
    ['stunned', 'bleeding', 'poisoned'],
  )
