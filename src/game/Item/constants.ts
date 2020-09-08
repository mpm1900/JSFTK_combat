import { tItemRarity } from './type'
import { tCharacterClass } from '../Character/type'
import { tConsumable } from '../Consumable/type'
import { tArmorResourceType } from '../Armor/type'
import { GODSBEARD } from '../Consumable/objects/godsbeard'

export const ITEM_RARITY_COLORS: Record<tItemRarity, string> = {
  common: 'rgba(255,255,255,0.8)',
  uncommon: 'rgba(173,216,230,1)',
  rare: 'rgba(221,160,221,1)',
  mythic: 'rgb(255,160,122,1)',
}

export const CLASS_STARTING_CONSUMABLES: Record<
  tCharacterClass,
  tConsumable[]
> = {
  blacksmith: [GODSBEARD()],
  hunter: [GODSBEARD()],
  scholar: [GODSBEARD()],
  bard: [GODSBEARD()],
  enemy: [],
}

export const CHARACTER_RESOURCES: tArmorResourceType[] = [
  'offhand',
  'body',
  'head',
  'feet',
]
