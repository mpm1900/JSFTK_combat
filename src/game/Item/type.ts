export type tItemRarity = 'common' | 'uncommon' | 'rare' | 'mythic'
export type tItemType = 'weapon' | 'armor' | 'consumable'
export interface tItem {
  id: string
  name: string
  rarity: tItemRarity
  itemType: tItemType
}
