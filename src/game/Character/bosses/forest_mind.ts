import Icon from '../../../icons/svg/delapouite/brain-tentacle.svg'
import { tCharacter } from '../type'
import {
  makeEnemy,
  makeEnemyReward,
  makeEnemyWeapon,
} from '../enemies/_builder'
import { getRandomItem } from '../../Item/util'
import { createSkill } from '../../Skill/skills'
import { v4 } from 'uuid'

export const FOREST_MIND_ID = v4()
export const FOREST_MIND = (): tCharacter => {
  return {
    ...makeEnemy(
      'The Infected Forest Mind',
      Icon,
      5,
      75,
      makeEnemyWeapon('intelligence', 34, 'ranged', 'magic', [
        createSkill('Frenzy', 4, -5, {
          damageModifier: 0.6,
          targetType: 'group',
          perfectStatus: ['speed-down', 'resistance-down'],
        }),
        createSkill('Entangle', 4, -10, {
          damageModifier: 0.2,
          targetType: 'group',
          perfectStatus: ['stunned'],
        }),
        createSkill('Mind Blast', 4, 0, {
          perfectPierce: true,
        }),
      ]),
      {
        intelligence: 75,
        agility: 80,
        luck: 50,
        armor: 9,
        resistance: 12,
        evasion: 9,
      },
      ['flying'],
      [
        makeEnemyReward(200, 120, [
          getRandomItem(3, 3),
          getRandomItem(3, 3),
          getRandomItem(3, 3),
        ]),
      ],
      ['stunned', 'poisoned'],
    ),
    id: FOREST_MIND_ID,
  }
}
