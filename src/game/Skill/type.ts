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
  weaponDamageOverride?: number
  statusDurationOverride?: number
  targetType: tSkillTargetType
  rolls: number
  offset: number
  // TODO change this to isDamageSkill or doesDamage
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

  inspirationUsed: number
  rollResults: boolean[]
  perfect: boolean
  passedCount: number
  accuracySuccess: boolean

  ignoreResistance: boolean
  criticalHitSuccess: boolean
  weaponDidBreak: boolean
  rawDamage: tDamage
  splashDamage: tDamage
  addedStatus: tStatusType[]
}

export interface tTargetSkillResult extends tSourceSkillResult {
  target: tProcessedCharacter
  dodgeSuccess: boolean
  totalDamage: tDamage
  reflectedDamage: tDamage
  loggedDamgge: tDamage
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
