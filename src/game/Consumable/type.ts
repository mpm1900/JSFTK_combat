import { tItem } from '../Item/type'
import { tSkill } from '../Skill/type'

export type tConsumableEffectType = 'healing'
export interface tConsumable extends tItem {
  cid: string
  skill: tSkill
}
export interface tConsumableStack {
  consumable: tConsumable
  count: number
}
