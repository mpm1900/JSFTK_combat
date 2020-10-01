import Lich from '../../../icons/svg/delapouite/overlord-helm.svg'
import { tCharacter } from '../type'
import {
  makeEnemy,
  makeEnemyReward,
  makeEnemyWeapon,
} from '../enemies/_builder'
import { getRandomItem } from '../../Item/util'
import { createSkill } from '../../Skill/skills'
import { v4 } from 'uuid'

export const LICH_ID = v4()
export const LICH = (): tCharacter => {
  return {
    ...makeEnemy(
      'Lich',
      Lich,
      5,
      67,
      makeEnemyWeapon('strength', 34, 'melee', 'magic', [
        createSkill('Drain', 4, 0, {
          damageModifier: 0.5,
          targetType: 'group',
          perfectStatus: ['speed-down'],
        }),
        createSkill('Screech', 4, -10, {
          damageModifier: 0.1,
          damage: false,
          targetType: 'group',
          perfectStatus: ['stunned'],
        }),
        createSkill('Smite', 4, 0, {
          perfectStatus: ['armor-down'],
        }),
      ]),
      {
        strength: 85,
        intelligence: 75,
        agility: 80,
        luck: 50,
        armor: 7,
        resistance: 8,
        evasion: 16,
      },
      ['undead'],
      [
        makeEnemyReward(400, 120, [
          getRandomItem(3, 3),
          getRandomItem(3, 3),
          getRandomItem(3, 3),
        ]),
      ],
      ['stunned', 'bleeding', 'poisoned'],
    ),
    id: LICH_ID,
  }
}