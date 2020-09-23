import { v4 } from 'uuid'
import { tEncounterType, tFloor2 } from './type'
import { tArmor } from '../Armor/type'
import { tWeapon } from '../Weapon/type'
import { tConsumable } from '../Consumable/type'
import { makeEncounterArray } from '../../grid/util'
import { ZERO_REWARD } from './constants'
import { FLOOR_NAMES } from './floors'

export const getItemCost = (item: tArmor | tWeapon | tConsumable): number => {
  return item.goldValue * 3
}

export const makeEncounter = (type: tEncounterType) => ({
  id: v4(),
  name: '',
  type,
  reward: ZERO_REWARD,
  completed: false,
  seen: false,
  blocking: false,
})

export const makeFloor2 = (
  id: string,
  depth: number,
  size: number,
): tFloor2 => {
  let name = FLOOR_NAMES[id]
  return {
    id,
    name,
    depth,
    size: size,
    encounters: makeEncounterArray(size, id),
  }
}
