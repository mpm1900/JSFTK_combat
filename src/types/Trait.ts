import { StatsT } from './Stats'

export interface HasTraitsT {
  traits: TraitT[]
}
export interface HasCommittedTraits {
  committedTraits: TraitT[]
}
export interface TraitT {
  duration: number
  stats: StatsT
}
