export type tDamageType = 'magic' | 'physical'
export type tDamageRange = 'melee' | 'ranged'
export interface tDamage {
  type: tDamageType
  range: tDamageRange
  value: number
}
