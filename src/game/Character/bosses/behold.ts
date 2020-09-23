import Icon from '../../../icons/svg/lorc/behold.svg'
import { tCharacter } from '../type'
import {
  makeEnemy,
  makeEnemyReward,
  makeEnemyWeapon,
} from '../enemies/_builder'
import { getRandomItem } from '../../Item/util'
import { createSkill } from '../../Skill/skills'
import { v4 } from 'uuid'

export const BEHOLD_ID = v4()
export const BEHOLD = (): tCharacter => {
  return {
    ...makeEnemy(
      'Behold',
      Icon,
      9,
      131,
      makeEnemyWeapon('intelligence', 40, 'melee', 'physical', [
        createSkill('Arcane', 4, -5, {
          perfectPierce: true,
        }),
        createSkill('Blood Nova', 5, 0, {
          damageModifier: 0.75,
          targetType: 'group',
          perfectStatus: ['bleeding'],
        }),
        createSkill('Posess', 4, -15, {
          damageModifier: 0,
          damage: false,
          targetType: 'group',
          perfectStatus: ['stunned'],
        }),
      ]),
      {
        intelligence: 85,
        agility: 85,
        armor: 12,
        resistance: 18,
        evasion: 16,
      },
      ['undead'],
      [
        makeEnemyReward(200, 120, [
          getRandomItem(5, 5),
          getRandomItem(5, 5),
          getRandomItem(5, 5),
        ]),
      ],
      ['stunned', 'poisoned', 'bleeding'],
    ),
    id: BEHOLD_ID,
  }
}
