import { TargetTypeT, EntityT } from './core'
import { StatusTypeT, CharacterTagT } from './Status'
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
  accuracy: CheckT | undefined
  damage: boolean
  perfectStatus: StatusTypeT[]
  perfectTags: CharacterTagT[]
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
  addedStatus: StatusTypeT[]
  addedTags: CharacterTagT[]
  splashDamage: DamageT
  pierce: boolean
}

export interface TargetSkillResultT extends SourceSkillResultT {
  target: ProcessedCharacterT
  dodgeSuccess: boolean
  blockedDamage: DamageT
  totalDamage: DamageT
}
