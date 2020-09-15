import { createSkill } from '.'

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

export const POISON_KNIFE = createSkill('Poison Knife', 0, 0, {
  damage: false,
  perfectStatus: ['poisoned'],
})
