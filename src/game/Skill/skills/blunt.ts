import { createSkill } from '.'

export const SMASH = createSkill('Smash', 3, 0)
export const WITHERING_SMASH = createSkill('Smash', 2, 0)
export const GLASS_SMASH = createSkill('Smash', 1, 0)
export const RIPPLE = createSkill('Ripple', 4, -10, {
  perfectSplash: true,
})
export const EARTHQUAKE = createSkill('Earthquake', 4, -10, {
  damageModifier: 0.5,
  targetType: 'group',
})
export const STUN = createSkill('Stun', 3, -10, {
  damageModifier: 0.5,
  perfectStatus: ['stunned'],
})
export const CRUSH = createSkill('Crush', 5, -25, {
  damageModifier: 1.5,
})
export const STAB = createSkill('Stab', 4, 0, {
  perfectPierce: true,
})
