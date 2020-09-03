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
}

export type CharacterTagTypeT = 'targeted' | 'dazed'
export interface CharacterTagT {
  type: CharacterTagTypeT
  duration: number
}
