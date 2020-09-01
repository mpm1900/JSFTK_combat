import { TargetTypeT, EntityT } from './core'
import { StatusTypeT } from './Status'
import { CheckT, CheckResultT } from './Roll'
import { DamageT } from './Damage'
import { ProcessedCharacterT } from './Character'

export interface HasSkillsT {
  skills: SkillT[]
}

export interface SkillT extends EntityT {
  damageModifier: number
  target: TargetTypeT
  rolls: CheckT[]
  accuracy: CheckT
  perfectStatus: StatusTypeT[]
  perfectSplash: boolean
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
  addedStatus: StatusTypeT[]
  splashDamage: DamageT
}

export interface TargetSkillResultT extends SourceSkillResultT {
  target: ProcessedCharacterT
  dodgeSuccess: boolean
  blockedDamage: DamageT
  totalDamage: DamageT
}
