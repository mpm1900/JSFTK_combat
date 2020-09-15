import { tConsumable } from '../type'
import { v4 } from 'uuid'
import { createSkill } from '../../Skill/skills'

const CURE = createSkill('Cure Potion', 0, 0, {
  damageModifier: 0,
  damage: false,
  targetType: 'self',
  perfectStatus: ['cure'],
})

const cid = v4()
export const CURE_POTION = (): tConsumable => {
  const id = v4()
  return {
    id,
    cid,
    name: 'Cure Potion',
    itemType: 'consumable',
    rarity: 'common',
    skill: {
      ...CURE,
      consumableId: id,
    },
    goldValue: 20,
  }
}
