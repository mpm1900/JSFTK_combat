import { ConsumableT } from '../../types/Consumable'
import { makeEntity } from '../../functions/Entity'

export const GODSBEARD: ConsumableT = {
  ...makeEntity('Godsbeard'),
  itemType: 'consumable',
  rarity: 'common',
  skill: {
    ...makeEntity('Godsbeard'),
    damageModifier: 0,
    targetType: 'self',
    rolls: [],
    damage: false,
    healing: true,
    isBasicAttack: false,
    perfectSplash: false,
    perfectPierce: false,
    perfectStatus: [],
    targetQueueOffset: 0,
    targetQueueSet: undefined,
  },
}
