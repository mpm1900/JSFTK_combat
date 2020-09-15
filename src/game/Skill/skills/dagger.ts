import { createSkill } from '.'

export const STRIKE = createSkill('Strike', 4, 0)
export const WITHERING_STRIKE = createSkill('Strike', 2, 0)
export const GLASS_STRIKE = createSkill('Strike', 1, 0)
export const SWING = createSkill('Swing', 5, 0)
export const FLURRY = createSkill('Flurry', 4, -10, {
  damageModifier: 0.5,
  targetType: 'group',
})
export const LUNGE = createSkill('Lunge', 5, -25, {
  damageModifier: 1.5,
})
export const STAB = createSkill('Stab', 2, -5, {
  perfectPierce: true,
})
export const SLASH = createSkill('Slash', 4, -10, {
  perfectStatus: ['bleeding'],
})
