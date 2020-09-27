import { createSkill } from '.'

export const FIRE = createSkill('Fire', 1, 0)
export const SNIPE = createSkill('Snipe', 2, 0, {
  perfectPierce: true,
})
export const FAN_FIRE = createSkill('Fan Fire', 1, 0, {
  damageModifier: 0.5,
  targetType: 'group',
})
