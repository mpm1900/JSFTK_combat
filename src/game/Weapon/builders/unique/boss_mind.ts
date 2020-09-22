import { createWeapon } from '..'
import { createSkill } from '../../../Skill/skills'
import { PROTECT, TIME_JUMP } from '../../../Skill/skills/catalyst'
import { tWeapon } from '../../type'

export const MINDSTEM_CATALYST: tWeapon = {
  ...createWeapon(
    'catalyst',
    'hardened',
    [
      createSkill('Arcane', 2, 0, { perfectPierce: true }),
      createSkill('Stun', 2, -5, {
        damageModifier: 0.5,
        perfectStatus: ['stunned'],
      }),
      TIME_JUMP,
      PROTECT,
    ],
    {
      intelligence: 5,
      attackDamageModifier: 4,
      criticalChance: 5,
    },
    ['stunned'],
  ),
  name: `Mindstem Catalyst`,
  rarity: 'mythic',
}
