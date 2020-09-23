import { getRandom } from '../../../util'
import Icon from '../../../icons/svg/lorc/grim-reaper.svg'
import { tCharacter } from '../type'
import { getRandomItem } from '../../Item/util'
import { makeEnemy, makeEnemyReward, makeEnemyWeapon } from './_builder'
import { createSkill } from '../../Skill/skills'
import { CLASS_STATS } from '../../Stats/constants'
import { tStatusType } from '../../Status/type'

export const FOREST_REAPER = (): tCharacter => {
  return makeEnemy(
    'Dark Forest Reaper',
    Icon,
    6,
    52,
    makeEnemyWeapon('dexterity', 34, 'melee', 'physical', [
      createSkill('Slash', 4, 0, {
        perfectStatus: ['armor-down'],
        perfectPierce: true,
      }),
      createSkill('Slice', 2, -15, {
        perfectStatus: ['bleeding'],
        perfectPierce: true,
      }),
      createSkill('Curse', 2, -10, {
        damage: false,
        damageModifier: 0,
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
    ]),
    {
      ...CLASS_STATS.reaper,
      armor: 8,
      resistance: 10,
      evasion: 32,
    },
    ['undead'],
    [
      makeEnemyReward(100, 40),
      makeEnemyReward(180, 40, [getRandomItem(3, 3)]),
      makeEnemyReward(200, 50, [getRandomItem(4, 3)]),
    ],
  )
}
