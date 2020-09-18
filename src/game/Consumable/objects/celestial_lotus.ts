import { tConsumable } from '../type'
import { v4 } from 'uuid'
import { REMOVE_CURSES } from '../../Skill/skills/consumables'

const cid = v4()
export const CELESTIAL_LOTUS = (): tConsumable => {
  const id = v4()
  return {
    id,
    cid,
    name: 'Celestial Lotus',
    itemType: 'consumable',
    rarity: 'common',
    skill: {
      ...REMOVE_CURSES,
      consumableId: id,
    },
    goldValue: 30,
  }
}
