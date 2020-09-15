import { tConsumable } from '../type'
import { v4 } from 'uuid'
import { HEAL } from '../../Skill/skills/armor'

const cid = v4()
export const GODSBEARD = (): tConsumable => {
  const id = v4()
  return {
    id,
    cid,
    name: 'Mellow Grass',
    itemType: 'consumable',
    rarity: 'common',
    skill: {
      ...HEAL,
      consumableId: id,
    },
    goldValue: 20,
  }
}
