import { createHeavyArmor } from '..'

export const HEART_OF_THE_BEAST = () => ({
  ...createHeavyArmor(
    'Heart of the Beast',
    'mythic',
    500,
    {
      armor: 10,
      resistance: 10,
      attackDamageOffset: 6,
      criticalChance: 6,
      healthRegeneration: 6,
    },
    [],
    ['burning'],
  ),
})
