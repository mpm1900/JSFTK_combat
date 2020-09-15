import { createSkill } from '.'

export const THRUST = createSkill('Thrust', 3, 0)
export const SWING = createSkill('Swing', 4, 0)
export const WITHERING_SWING = createSkill('Swing', 2, 0)
export const GLASS_SWING = createSkill('Swing', 1, 0)
export const FLURRY = createSkill('Flurry', 4, -10, {
  damageModifier: 0.5,
  targetType: 'group',
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
export const ARMOR_UP = createSkill('Armor Up', 2, 0, {
  targetType: 'self',
  perfectStatus: ['armor-up'],
})
export const EVADE_UP = createSkill('Evade Up', 2, 0, {
  targetType: 'self',
  perfectStatus: ['evade-up'],
})
