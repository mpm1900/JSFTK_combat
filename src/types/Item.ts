import { EntityT } from './core'

export type ItemRarityT = 'common' | 'uncommon' | 'rare' | 'mythic'
export type ItemTypeT = 'weapon' | 'armor'
export interface ItemT extends EntityT {
  rarity: ItemRarityT
  itemType: ItemTypeT
}
