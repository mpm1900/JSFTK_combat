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

export const IRON_CHARM = () =>
  createPendant('Iron Charm', 'uncommon', 45, {
    armor: 1,
    strength: 1,
    agility: -2,
  })
