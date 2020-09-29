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

export const MINOR_HEALTH_RING = () =>
  createRing('Minor Health Ring', 'uncommon', 50, {
    maxHealthOffset: 8,
    vigor: 2,
  })

export const MINOR_REGEN_RING = () =>
  createRing('Minor Regen Ring', 'uncommon', 50, {
    healthRegeneration: 3,
    vigor: 2,
  })

export const SILVER_RING = () =>
  createRing('Silver Ring', 'common', 50, {
    charisma: 2,
  })

export const MINOR_MAGIC_RING = () =>
  createRing('Minor Magic Ring', 'uncommon', 60, {
    resistance: 1,
    intelligence: 2,
    strength: -2,
  })
