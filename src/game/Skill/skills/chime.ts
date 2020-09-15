import { createSkill } from '.'

export const RING = createSkill('Ring', 3, 0, {
  perfectPierce: true,
})
export const WITHERING_RING = createSkill('Ring', 2, 0, {
  perfectPierce: true,
})
export const GLASS_RING = createSkill('Ring', 1, 0, {
  perfectPierce: true,
})
export const REVERBERATE = createSkill('Reverberate', 4, -5, {
  damageModifier: 0.5,
  targetType: 'group',
})
export const STUN = createSkill('Stun', 2, -5, {
  damageModifier: 0.5,
  perfectStatus: ['stunned'],
})
export const SLOW = createSkill('Slow', 4, 0, {
  damageModifier: 0.5,
  perfectStatus: ['speed-down'],
})
export const VANISH = createSkill('Vanish', 2, 0, {
  damageModifier: 0,
  damage: false,
  targetType: 'ally',
  perfectStatus: ['evade-up'],
})
export const RUSH = createSkill('Rush', 2, 0, {
  damageModifier: 0,
  damage: false,
  targetType: 'ally',
  perfectStatus: ['rushed'],
})
export const RESET = createSkill('Reset', 3, -10, {
  damageModifier: 0.5,
  perfectStatus: ['reset'],
})
