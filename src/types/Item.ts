import { EntityT } from './core'

export type ItemRarityT = 'common' | 'uncommon' | 'rare' | 'mythic'

export interface ItemT extends EntityT {
  rarity: ItemRarityT
}
