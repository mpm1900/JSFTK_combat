import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import Spirit from '../../../icons/svg/lorc/spectre.svg'
import { createSkill } from '../../Skill/skills'
import { getRandom } from '../../../util'
import { tStatusType } from '../../Status/type'
import { getRandomItem } from '../../Item/util'

export const TOMB_SPIRIT = () =>
  makeEnemy(
    'Tomb Spirit',
    Spirit,
    4,
    26,
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
      createSkill('Smite', 4, 0),
    ]),
    {
      intelligence: 84,
      agility: getRandom([75, 76, 77, 78, 79, 80]),
      evasion: 23,
      resistance: 6,
    },
    ['undead'],
    [
      makeEnemyReward(50, 20),
      makeEnemyReward(50, 20),
      makeEnemyReward(50, 30, [getRandomItem(2, 2)]),
      makeEnemyReward(50, 40, [getRandomItem(3, 3)]),
    ],
    ['stunned', 'bleeding', 'poisoned'],
  )
