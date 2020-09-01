import { TraitT } from './Trait'
import { SkillT } from './Skill'
import { DamageT } from './Damage'
import { ItemT } from './Item'

export type WeaponTypeT = string
export interface WeaponT extends ItemT {
  type: WeaponTypeT
  hands: number
  damage: DamageT
  traits: TraitT[]
  skills: SkillT[]
}

export interface ProcessedWeaponT extends WeaponT {
  processed: true
}
