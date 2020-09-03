import { TraitT } from './Trait'
import { SkillT } from './Skill'
import { DamageT } from './Damage'
import { ItemT } from './Item'
import { CheckT } from './Roll'

export type WeaponTypeT = string
export interface WeaponT extends ItemT {
  type: WeaponTypeT
  hands: number
  damage: DamageT
  rolls?: CheckT[]
  traits: TraitT[]
  skills: SkillT[]
}

export interface ProcessedWeaponT extends WeaponT {
  processed: true
}
