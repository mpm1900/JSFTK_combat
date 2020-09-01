export type DamageTypeT = 'magic' | 'physical'
export interface DamageT {
  type: DamageTypeT
  damage: number
}
