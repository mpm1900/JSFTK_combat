import { createSkill } from '.'

export const BLAST = createSkill('Blast', 2, 0)
export const GLASS_BLAST = createSkill('Blast', 1, 0)
export const ARCANE = createSkill('Arcane', 3, 0, {
  perfectPierce: true,
})
export const NOVA = createSkill('Nova', 3, -5, {
  damageModifier: 0.5,
  targetType: 'group',
})
export const ENFLAME = createSkill('Enflame', 4, 0, {
  perfectStatus: ['burning'],
})
export const ENGULF = createSkill('Engulf', 4, -10, {
  damageModifier: 0.7,
  perfectStatus: ['burning'],
  targetType: 'group',
})
export const FREEZE = createSkill('Freeze', 4, 0, {
  perfectStatus: ['frozen'],
})
export const SHOCK = createSkill('Shock', 4, 0, {
  perfectStatus: ['shocked'],
})
export const STUN = createSkill('Stun', 2, -10, {
  damageModifier: 0.5,
  perfectStatus: ['stunned'],
})
export const PROTECT = createSkill('Protect', 2, 0, {
  damageModifier: 0,
  targetType: 'ally',
  damage: false,
  perfectStatus: ['protected'],
})
export const TIME_JUMP = createSkill('Time Jump', 3, -5, {
  damageModifier: 0,
  targetType: 'ally',
  damage: false,
  perfectStatus: ['rushed'],
})
