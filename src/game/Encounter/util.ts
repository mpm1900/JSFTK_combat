import { v4 } from 'uuid'
import { tEncounterType, tFloor2 } from './type'
import { tArmor } from '../Armor/type'
import { tWeapon } from '../Weapon/type'
import { tConsumable } from '../Consumable/type'
import { makeEncounterArray } from '../../grid/util'
import { ZERO_REWARD } from './constants'

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
})

export const makeFloor2 = (
  id: string,
  depth: number,
  size: number,
): tFloor2 => {
  let name = ''
  if (depth === 0) {
    name = 'The Forgotten Woods'
  }
  if (depth === 1) {
    name = 'Tomb of the Formless One (in-progress)'
  }
  if (depth === 2) {
    name = 'Realm of the Ancients (comming soon)'
  }
  return {
    id,
    name,
    depth,
    size: size,
    encounters: makeEncounterArray(size, id),
  }
}
