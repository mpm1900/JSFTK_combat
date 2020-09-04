import { ItemT } from './Item'
import { SkillT } from './Skill'

export type ConsumableEffectTypeT = 'healing'
export interface ConsumableT extends ItemT {
  skill: SkillT
}
