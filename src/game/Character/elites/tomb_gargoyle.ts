import Icon from '../../../icons/svg/delapouite/gargoyle.svg'
import { tCharacter } from '../type'
import {
  makeEnemy,
  makeEnemyReward,
  makeEnemyWeapon,
} from '../enemies/_builder'
import { getRandomItem } from '../../Item/util'
import { createSkill } from '../../Skill/skills'

export const TOMB_GARGOYLE = (): tCharacter => {
  return makeEnemy(
    'Gargoyle Guardians',
    Icon,
    6,
    73,
    makeEnemyWeapon('strength', 34, 'melee', 'physical', [
      createSkill('Screech', 4, -5, {
        damageModifier: 0.2,
        targetType: 'group',
        perfectStatus: ['stunned'],
      }),
      createSkill('Bite', 4, -5, {
        perfectStatus: ['bleeding'],
      }),
    ]),
    {
      strength: 75,
      agility: 85,
      armor: 8,
      resistance: 8,
      evasion: 24,
    },
    ['flying'],
    [
      makeEnemyReward(200, 120, [
        getRandomItem(3, 3),
        getRandomItem(3, 3),
        getRandomItem(3, 3),
      ]),
    ],
    ['stunned'],
  )
}
