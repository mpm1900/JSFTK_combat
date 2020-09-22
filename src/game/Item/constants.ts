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
  uncommon: '#5cb574',
  rare: 'rgba(128,181,255,1)',
  epic: 'rgba(213, 128, 255,1)',
  mythic: 'rgb(255,160,122,1)',
}

export const CLASS_STARTING_CONSUMABLES: Record<
  tCharacterClass,
  tConsumable[]
> = {
  executioner: [GODSBEARD(), BEAST_DRUG()],
  ranger: [GODSBEARD(), POISON_KNIFE()],
  reaper: [GODSBEARD(), FIREBOMB()],
  student: [GODSBEARD(), CELESTIAL_LOTUS()],
  patrician: [GODSBEARD(), CURE_POTION()],
  drifter: [GODSBEARD(), GODSBEARD()],
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
