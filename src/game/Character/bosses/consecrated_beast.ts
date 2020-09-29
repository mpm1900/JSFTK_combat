import Beast from '../../../icons/svg/lorc/diablo-skull.svg'
import { tCharacter } from '../type'
import {
  makeEnemy,
  makeEnemyReward,
  makeEnemyWeapon,
} from '../enemies/_builder'
import { getRandomItem } from '../../Item/util'
import { createSkill } from '../../Skill/skills'
import { v4 } from 'uuid'

export const CONSECRATED_BEAST_ID = v4()
export const CONSECRATED_BEAST = (): tCharacter => {
  return {
    ...makeEnemy(
      'The Consecrated Beast',
      Beast,
      8,
      112,
      makeEnemyWeapon('strength', 38, 'melee', 'physical', [
        createSkill('Swipe', 4, -5, {
          perfectPierce: true,
        }),
        createSkill('Wide Swipe', 5, 0, {
          damageModifier: 0.75,
          targetType: 'group',
          perfectStatus: ['bleeding'],
        }),
        createSkill('Howl', 4, -15, {
          damageModifier: 0,
          damage: false,
          targetType: 'group',
          perfectStatus: ['stunned'],
        }),
      ]),
      {
        strength: 85,
        agility: 80,
        luck: 50,
        armor: 12,
        resistance: 12,
        evasion: 10,
      },
      ['undead'],
      [
        makeEnemyReward(800, 120, [
          getRandomItem(5, 5),
          getRandomItem(5, 5),
          getRandomItem(5, 5),
        ]),
      ],
      ['stunned', 'poisoned'],
    ),
    id: CONSECRATED_BEAST_ID,
  }
}
