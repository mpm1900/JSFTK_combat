import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import Banshee from '../../../icons/svg/lorc/haunting.svg'
import { createSkill } from '../../Skill/skills'
import { getRandom } from '../../../util'
import { getRandomItem } from '../../Item/util'

export const BANSHEE = () =>
  makeEnemy(
    'Banshee',
    Banshee,
    6,
    32,
    makeEnemyWeapon('intelligence', 28, 'ranged', 'magic', [
      createSkill('Nova', 3, -5, {
        damageModifier: 0.5,
      }),
      createSkill('Swipe', 3, 0, { perfectPierce: true }),
      createSkill('Attack Down', 3, -15, {
        damage: false,
        damageModifier: 0,
        perfectStatus: ['attack-down'],
      }),
    ]),
    {
      intelligence: 78,
      strength: 70,
      agility: getRandom([77, 78, 79, 80, 81, 82]),
      evasion: 30,
      resistance: 8,
      armor: 1,
    },
    ['undead'],
    [
      makeEnemyReward(50, 40),
      makeEnemyReward(50, 40),
      makeEnemyReward(80, 40),
      makeEnemyReward(80, 40, [getRandomItem(4, 3)]),
      makeEnemyReward(100, 50, [getRandomItem(4, 4)]),
    ],
    ['burning', 'bleeding', 'poisoned', 'stunned'],
  )
