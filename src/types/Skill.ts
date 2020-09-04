import { TargetTypeT, EntityT } from './core'
import { StatusTypeT, CharacterStatusT } from './Status'
import { CheckT, CheckResultT } from './Roll'
import { DamageT } from './Damage'
import { ProcessedCharacterT } from './Character'
import { ProcessedPartyT } from './Party'

export interface HasSkillsT {
  skills: SkillT[]
}

export interface SkillT extends EntityT {
  damageModifier: number
  targetType: TargetTypeT
  rolls: CheckT[]
  damage: boolean
  healing: boolean
  isBasicAttack: boolean
  perfectStatus: CharacterStatusT[]
  perfectSplash: boolean
  perfectPierce: boolean
}
export interface SkillTargetT {
  type: TargetTypeT
  party?: ProcessedPartyT
  character?: ProcessedCharacterT
}

export interface SourceSkillResultT {
  rollResults: CheckResultT[]
  skill: SkillT
  source: ProcessedCharacterT
  accuracySuccess: boolean
  criticalSuccess: boolean
  passedCount: number
  perfect: boolean
  rawDamage: DamageT
  healing: number
  consumableIndex: number | undefined
  addedStatus: CharacterStatusT[]
  splashDamage: DamageT
  pierce: boolean
}

export interface TargetSkillResultT extends SourceSkillResultT {
  target: ProcessedCharacterT
  dodgeSuccess: boolean
  blockedDamage: DamageT
  totalDamage: DamageT
  reflectedDamage: DamageT
  regeneratedHealth: number
  willDie: boolean
}
