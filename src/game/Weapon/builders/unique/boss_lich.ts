import { createWeapon } from '..'
import { createSkill } from '../../../Skill/skills'
import { tWeapon } from '../../type'

export const LICH_SWORD: tWeapon = {
  ...createWeapon(
    'sword',
    'sharp',
    [createSkill('Strike', 2, 0)],
    {
      strength: 3,
      intelligence: 3,
    },
    [
      'cursed-agility',
      'cursed-charisma',
      'cursed-dexterity',
      'cursed-intelligence',
      'cursed-luck',
      'cursed-strength',
      'cursed-vigor',
    ],
  ),
  name: `Lich's Magic Sword`,
  rarity: 'mythic',
}
