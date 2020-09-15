import { createSkill } from '.'

export const TAUNT = createSkill('Taunt', 2, 0, {
  damageModifier: 0,
  damage: false,
  targetType: 'self',
  weaponStatOverride: 'vigor',
  perfectStatus: ['targeted'],
})
