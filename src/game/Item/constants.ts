import { tItemRarity } from './type'
import { tCharacterClass } from '../Character/type'
import { tConsumable } from '../Consumable/type'
import { tArmorResourceType } from '../Armor/type'
import { GODSBEARD } from '../Consumable/objects/godsbeard'
import { CELESTIAL_LOTUS } from '../Consumable/objects/celestial_lotus'
import { POISON_KNIFE } from '../Consumable/objects/poison_knife'
import { BEAST_DRUG } from '../Consumable/objects/beast_drug'
import { CURE_POTION } from '../Consumable/objects/curing_potion'
import { FIREBOMB } from '../Consumable/objects/firebomb'

export const ITEM_RARITY_COLORS: Record<tItemRarity, string> = {
  common: 'rgba(255, 255, 255,1)',
  uncommon: 'rgba(128,181,255,1)',
  rare: 'rgba(213, 128, 255,1)',
  mythic: 'rgb(255,160,122,1)',
}

export const CLASS_STARTING_CONSUMABLES: Record<
  tCharacterClass,
  tConsumable[]
> = {
  executioner: [GODSBEARD(), GODSBEARD(), BEAST_DRUG(), FIREBOMB()],
  ranger: [GODSBEARD(), GODSBEARD(), POISON_KNIFE(), FIREBOMB()],
  reaper: [GODSBEARD(), GODSBEARD(), FIREBOMB()],
  student: [GODSBEARD(), GODSBEARD(), CELESTIAL_LOTUS(), FIREBOMB()],
  patrician: [GODSBEARD(), GODSBEARD(), CURE_POTION(), FIREBOMB()],
  drifter: [GODSBEARD(), FIREBOMB()],
  enemy: [],
}

export const CHARACTER_RESOURCES: tArmorResourceType[] = [
  'offhand',
  'body',
  'head',
  'feet',
  'pendant',
  'ring',
]
