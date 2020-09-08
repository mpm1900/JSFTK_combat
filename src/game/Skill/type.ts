import { tStatusType } from '../Status/type'
import { tProcessedCharacter } from '../Character/type'
import { tDamage, tDamageRange } from '../Damage/type'
import { tProcessedParty, tParty } from '../Party/type'
import { tQueue } from '../Queue/type'
import { tBaseStats } from '../Stats/type'

export type tSkillTargetType = 'single' | 'group' | 'self' | 'ally' | 'party'

export interface tSkill {
  id: string
  name: string
  damageModifier: number
  splashDamageModifier: number
  weaponRangeOverride?: tDamageRange
  weaponStatOverride?: keyof tBaseStats
  targetType: tSkillTargetType
  rolls: number
  offset: number
  damage: boolean
  healing: boolean
  perfectStatus: tStatusType[]
  perfectSplash: boolean
  perfectPierce: boolean
  consumableId?: string
}

export interface tSkillTarget {
  type: tSkillTargetType
  party?: tProcessedParty
  character?: tProcessedCharacter
}

export interface tSourceSkillResult {
  skill: tSkill
  source: tProcessedCharacter

  rollResults: boolean[]
  perfect: boolean
  passedCount: number

  ignoreResistance: boolean
  criticalHitSuccess: boolean
  rawDamage: tDamage
  splashDamage: tDamage
  addedStatus: tStatusType[]
}

export interface tTargetSkillResult extends tSourceSkillResult {
  target: tProcessedCharacter
  dodgeSuccess: boolean
  totalDamage: tDamage
  reflectedDamage: tDamage
}

export interface tSkillResult {
  sourceResult: tSourceSkillResult
  targetResults: tTargetSkillResult[]
}

export interface tSkillCommiterResult {
  playerParty: tParty
  enemyParty: tParty
  queue: tQueue
}
