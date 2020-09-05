import { EntityT } from './core'
import { TraitT } from './Trait'

export type StatusTypeT =
  | 'bleeding'
  | 'burning'
  | 'frozen'
  | 'poisoned'
  | 'targeted'
  | 'dazed'
  | 'evasive'
  | 'protected'
  | 'speed-down'
export interface CharacterStatusT {
  type: StatusTypeT
  duration: number
  stack?: number
}
export interface StatusT extends EntityT {
  type: StatusTypeT
  traits: TraitT[]
  committedTraits: TraitT[]
  commitChance: number
  canStack: boolean
  duration: number
  description?: string
  persist: boolean
}
