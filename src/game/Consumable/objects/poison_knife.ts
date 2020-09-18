import { tConsumable } from '../type'
import { v4 } from 'uuid'
import { POISON_KNIFE as skill } from '../../Skill/skills/consumables'

const cid = v4()
export const POISON_KNIFE = (): tConsumable => {
  const id = v4()
  return {
    id,
    cid,
    name: 'Poison Knife',
    itemType: 'consumable',
    rarity: 'common',
    skill: {
      ...skill,
      consumableId: id,
    },
    goldValue: 50,
  }
}
