import { TraitT, HasTraitsT, HasCommittedTraits } from '../types'
import { combineStats } from './Stats'
import { ZERO_TRAIT } from '../objects'

export const combineTraits = (...traits: TraitT[]): TraitT => {
  return traits.reduce(
    (p, c) => ({
      damage: p.damage + c.damage,
      stats: combineStats(p.stats, c.stats),
      duration: -1,
    }),
    ZERO_TRAIT,
  )
}

export const getTraitsFromObjects = (parents: HasTraitsT[]) => {
  return parents.reduce((p, c) => {
    return [...p, ...c.traits]
  }, [] as TraitT[])
}
export const getCommittedTraitsFromObjects = (
  parents: HasCommittedTraits[],
) => {
  return parents.reduce((p, c) => {
    return [...p, ...c.committedTraits]
  }, [] as TraitT[])
}
