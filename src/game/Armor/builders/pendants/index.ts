import { createPendant } from '..'

export const FOREST_PENDANT = () =>
  createPendant('Forest Pendant', 'rare', 60, {
    resistance: 1,
    healthRegeneration: 3,
  })

export const RANGER_CHARM = () =>
  createPendant('Ranger Charm', 'common', 30, {
    dexterity: 1,
  })

export const MINOR_AGILITY_CHARM = () =>
  createPendant('Minor Agility Charm', 'common', 40, {
    agility: 2,
  })

export const MINOR_STRENGTH_CHARM = () =>
  createPendant('Minor Strength Charm', 'common', 40, {
    strength: 1,
  })

export const IRON_CHARM = () =>
  createPendant('Iron Charm', 'uncommon', 45, {
    armor: 1,
    strength: 1,
    agility: -2,
  })

export const MINOR_DAMAGE_CHARM = () =>
  createPendant('Minor Damage Charm', 'rare', 70, {
    attackDamageModifier: 2,
    criticalDamageModifier: 4,
    maxHealthOffset: -5,
  })
