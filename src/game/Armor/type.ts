import { tItem } from '../Item/type'
import { tStats, tBaseStats } from '../Stats/type'
import { tSkill } from '../Skill/type'
import { tStatusType } from '../Status/type'

export type tArmorType =
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
export type tArmorResourceType = 'offhand' | 'head' | 'body' | 'feet'
export interface tArmor extends tItem {
  type: tArmorType
  resource: tArmorResourceType
  stats: tStats
  stat: keyof tBaseStats
  skills: tSkill[]
  immunities: tStatusType[]
}
