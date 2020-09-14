import { createSkill } from '.'

export const CHOP = createSkill('Chop', 3, 0)
export const SWING = createSkill('Swing', 4, 0)
export const WITHERING_SWING = createSkill('Swing', 2, 0)
export const GLASS_SWING = createSkill('Swing', 1, 0)
export const AXE_SPIN = createSkill('Axe Spin', 5, -10, {
  perfectSplash: true,
  splashDamageModifier: 0.5,
})
export const FLURRY = createSkill('Swipe', 4, -10, {
  damageModifier: 0.5,
  targetType: 'group',
})
export const STUN = createSkill('Stun', 3, -10, {
  damageModifier: 0.5,
  perfectStatus: ['stunned'],
})
export const CLEAVE = createSkill('Cleave', 5, -25, {
  damageModifier: 1.5,
})
export const SLICE = createSkill('Slice', 4, -5, {
  perfectPierce: true,
})
export const SLASH = createSkill('Slash', 4, -10, {
  perfectStatus: ['bleeding'],
})
