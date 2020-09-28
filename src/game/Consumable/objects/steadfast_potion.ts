import { tConsumable } from '../type'
import { v4 } from 'uuid'
import { createSkill } from '../../Skill/skills'

export const CURE = createSkill('Steadfast Potion', 0, 0, {
  damageModifier: 0,
  damage: false,
  targetType: 'self',
  perfectStatus: ['stunned-immunity'],
})

const cid = v4()
export const STEADFAST_POTION = (): tConsumable => {
  const id = v4()
  return {
    id,
    cid,
    name: 'Steadfast Potion',
    itemType: 'consumable',
    rarity: 'common',
    skill: {
      ...CURE,
      consumableId: id,
    },
    goldValue: 20,
  }
}
