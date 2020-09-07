import { TraitT } from './Trait'
import { SkillT } from './Skill'
import { DamageT } from './Damage'
import { ItemT } from './Item'

export type WeaponTypeT =
  | 'enemy'
  | 'axe'
  | 'blunt'
  | 'bow'
  | 'dagger'
  | 'pistol'
  | 'lute'
  | 'magic-staff'
  | 'spear'
  | 'sword'
  | 'tome'
  | 'torch'
export type WeaponAttackType = 'melee' | 'ranged'
export interface WeaponT extends ItemT {
  type: WeaponTypeT
  attackType: WeaponAttackType
  twoHand: boolean
  damage: DamageT
  traits: TraitT[]
  skills: SkillT[]
}

export interface ProcessedWeaponT extends WeaponT {
  processed: true
}
