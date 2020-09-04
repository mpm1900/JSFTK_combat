import { ItemRarityT, CharacterClassT } from '../types'
import { ConsumableT } from '../types/Consumable'
import { GODSBEARD } from './consumables/godsbeard'

export const ITEM_RARITY_COLORS: Record<ItemRarityT, string> = {
  common: 'rgba(255,255,255,0.8)',
  uncommon: 'rgba(173,216,230,1)',
  rare: 'rgba(221,160,221,1)',
  mythic: 'rgb(255,160,122,1)',
}

export const CLASS_STARTING_CONSUMABLES: Record<
  CharacterClassT,
  ConsumableT[]
> = {
  blacksmith: [GODSBEARD],
  hunter: [GODSBEARD],
  scholar: [GODSBEARD],
  bard: [GODSBEARD],
  enemy: [],
}
