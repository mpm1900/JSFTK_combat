import { EntityT } from './core'
import { TraitT } from './Trait'

export type StatusTypeT = 'bleeding' | 'burning' | 'frozen' | 'poisoned'
export interface CharacterStatusT {
  type: StatusTypeT
  duration: number
}
export interface StatusT extends EntityT {
  type: StatusTypeT
  traits: TraitT[]
  committedTraits: TraitT[]
  commitChance: number
  canStack: boolean
  duration: number
  description?: string
}

export type TagTypeT = 'targeted' | 'dazed' | 'evasive'
export interface CharacterTagT {
  type: TagTypeT
  duration: number
}
export interface TagT {
  type: TagTypeT
  duration: number
  damageModifier: number
  description?: string
}
