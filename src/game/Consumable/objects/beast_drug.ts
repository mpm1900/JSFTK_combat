import { tConsumable } from '../type'
import { v4 } from 'uuid'
import { createSkill } from '../../Skill/skills'

const cid = v4()
export const BEAST_DRUG = (): tConsumable => {
  const id = v4()
  return {
    id,
    cid,
    name: 'Beast Drug',
    itemType: 'consumable',
    rarity: 'common',
    skill: {
      ...createSkill('Beast Drug', 0, 0, {
        damage: false,
        targetType: 'self',
        perfectStatus: ['attack-up'],
      }),
      consumableId: id,
    },
    goldValue: 20,
  }
}
