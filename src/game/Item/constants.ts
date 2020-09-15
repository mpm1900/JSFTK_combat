import { tItemRarity } from './type'
import { tCharacterClass } from '../Character/type'
import { tConsumable } from '../Consumable/type'
import { tArmorResourceType } from '../Armor/type'
import { GODSBEARD } from '../Consumable/objects/godsbeard'
import { CELESTIAL_LOTUS } from '../Consumable/objects/celestial_lotus'
import { POISON_KNIFE } from '../Consumable/objects/poison_knife'

export const ITEM_RARITY_COLORS: Record<tItemRarity, string> = {
  common: 'rgba(255, 255, 255,1)',
  uncommon: 'rgba(173,216,230,1)',
  rare: 'rgba(221,160,221,1)',
  mythic: 'rgb(255,160,122,1)',
}

export const CLASS_STARTING_CONSUMABLES: Record<
  tCharacterClass,
  tConsumable[]
> = {
  executioner: [GODSBEARD(), GODSBEARD()],
  ranger: [GODSBEARD(), GODSBEARD(), POISON_KNIFE()],
  student: [GODSBEARD(), GODSBEARD(), CELESTIAL_LOTUS()],
  patrician: [GODSBEARD(), GODSBEARD()],
  drifter: [GODSBEARD()],
  enemy: [],
}

export const CHARACTER_RESOURCES: tArmorResourceType[] = [
  'offhand',
  'body',
  'head',
  'feet',
]
