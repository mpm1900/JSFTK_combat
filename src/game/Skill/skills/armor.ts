import { createSkill } from '.'

export const TAUNT = createSkill('Taunt', 2, 0, {
  damageModifier: 0,
  damage: false,
  targetType: 'self',
  weaponStatOverride: 'vigor',
  perfectStatus: ['targeted'],
})

export const HEAL = createSkill('Heal', 0, 0, {
  damageModifier: 0,
  targetType: 'self',
  damage: false,
  healing: true,
})

export const REMOVE_CURSES = createSkill('Remove Curses', 0, 0, {
  targetType: 'self',
  damage: false,
  perfectStatus: ['blessed'],
})
