export type tItemRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'mythic'
export type tItemType = 'weapon' | 'armor' | 'consumable'
export interface tItem {
  id: string
  name: string
  rarity: tItemRarity
  itemType: tItemType
  goldValue: number
}
