import { TraitT } from './Trait'
import { SkillT } from './Skill'
import { ItemT } from './Item'

export type ArmorTypeT =
  | 'shield'
  | 'magic-shield'
  | 'helmet'
  | 'hat'
  | 'magic-hat'
  | 'armor'
  | 'cloth-armor'
  | 'magic-armor'
  | 'footwear'
  | 'ring'
  | 'charm'
export type ArmorResourceType = 'offhand' | 'head' | 'body' | 'feet'
export interface ArmorT extends ItemT {
  type: ArmorTypeT
  resource: ArmorResourceType
  traits: TraitT[]
  skills: SkillT[]
}
