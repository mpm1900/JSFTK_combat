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
export interface ArmorT extends ItemT {
  type: ArmorTypeT
  traits: TraitT[]
  skills: SkillT[]
}
