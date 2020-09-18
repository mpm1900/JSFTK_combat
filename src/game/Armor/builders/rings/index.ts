import { createRing } from '..'

export const LUCKY_RING = () =>
  createRing('Lucky Ring', 'uncommon', 50, { luck: 20 })

export const RING_OF_FOCUS = () =>
  createRing('Ring of Focus', 'uncommon', 50, {
    attackDamageOffset: 1,
    criticalChance: 4,
  })

export const DRAINED_RING = () =>
  createRing('Drained Ring', 'uncommon', 40, {
    resistance: 2,
  })

export const SIMPLE_RING = () =>
  createRing('Simple Ring', 'common', 30, {
    armor: 1,
  })
