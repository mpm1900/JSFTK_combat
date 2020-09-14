import { createSkill } from '../skills'

export const CAW = createSkill('Caw', 2, -5, {
  damage: false,
  damageModifier: 0,
  perfectStatus: ['resistance-down'],
})
