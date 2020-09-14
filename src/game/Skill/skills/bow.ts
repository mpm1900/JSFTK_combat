import { createSkill } from '.'

export const SHOT = createSkill('Shot', 3, 0)
export const WITHERING_SHOT = createSkill('Shot', 2, 0)
export const GLASS_SHOT = createSkill('Shot', 1, 0)
export const HEADSHOT = createSkill('Headshot', 3, -10, {
  perfectPierce: true,
})
export const FLURRY = createSkill('Flurry', 2, -5, {
  damageModifier: 0.5,
  targetType: 'group',
})
export const STUN = createSkill('Stun', 3, -10, {
  damageModifier: 0.5,
  perfectStatus: ['stunned'],
})
export const PIN_DOWN = createSkill('Pin Down', 2, -10, {
  perfectStatus: ['speed-down'],
})
export const WOUNDING_SHOT = createSkill('Wounding Shot', 2, -10, {
  perfectStatus: ['bleeding'],
})
