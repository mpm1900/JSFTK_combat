import { tConsumable } from '../type'
import { v4 } from 'uuid'
import { createSkill } from '../../Skill/skills'

const cid = v4()
export const FIREBOMB = (): tConsumable => {
  const id = v4()
  return {
    id,
    cid,
    name: 'Firebomb',
    itemType: 'consumable',
    rarity: 'rare',
    skill: {
      ...createSkill('Firebomb', 0, 0, {
        weaponDamageOverride: 15,
        perfectStatus: ['burning'],
      }),
      consumableId: id,
    },
    goldValue: 100,
  }
}
