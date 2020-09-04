import { EntityT } from './core'

export type ItemRarityT = 'common' | 'uncommon' | 'rare' | 'mythic'
export type ItemTypeT = 'weapon' | 'armor' | 'consumable'
export interface ItemT extends EntityT {
  rarity: ItemRarityT
  itemType: ItemTypeT
}
