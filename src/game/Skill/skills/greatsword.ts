import { createSkill } from '.'

export const STRIKE = createSkill('Strike', 3, 0)
export const WITHERING_STRIKE = createSkill('Strike', 2, 0)
export const GLASS_STRIKE = createSkill('Strike', 1, 0)
export const SWING = createSkill('Swing', 4, 0)
export const WIDE_SWING = createSkill('Wide Swing', 4, -5, {
  damageModifier: 0.8,
  splashDamageModifier: 0.8,
  perfectSplash: true,
})
export const FLURRY = createSkill('Swipe', 4, -10, {
  damageModifier: 0.5,
  targetType: 'group',
})
export const STUN = createSkill('Stun', 3, -10, {
  damageModifier: 0.5,
  perfectStatus: ['stunned'],
})
export const LUNGE = createSkill('Lunge', 5, -25, {
  damageModifier: 1.5,
})
export const SLICE = createSkill('Stab', 2, -5, {
  perfectPierce: true,
})
export const SLASH = createSkill('Slash', 4, -10, {
  perfectStatus: ['bleeding'],
})
