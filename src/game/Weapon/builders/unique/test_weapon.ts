import { createWeapon } from '..'
import { CHOP } from '../../../Skill/skills/axe'
import { ARCANE, NOVA, PROTECT } from '../../../Skill/skills/catalyst'
import { tWeapon } from '../../type'

export const TEST_WEAPON = (): tWeapon => ({
  ...createWeapon(
    'greatsword',
    'mythic',
    [ARCANE, NOVA, CHOP, PROTECT],
    {
      strength: 100,
      agility: 100,
      charisma: -4,
      damageModifiers: {
        undead: 0.1,
        beast: 0.05,
        flying: 0.15,
      },
    },
    ['burning'],
  ),
  name: `Test Weapon of Evil`,
  // breakable: true,
  damage: {
    value: 100,
    range: 'melee',
    type: 'physical',
  },
})
