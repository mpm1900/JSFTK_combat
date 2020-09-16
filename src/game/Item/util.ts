import { getRandom } from '../../util'
import { ARMOR_BY_LEVEL } from '../Armor/builders/sets'
import { tArmor } from '../Armor/type'
import { WEAPONS_BY_LEVEL } from '../Weapon/builders/objects'
import { tWeapon } from '../Weapon/type'
import { tItemType } from './type'

export const getRandomItem = (level: number): tWeapon | tArmor => {
  const itemType: tItemType = getRandom(['weapon', 'armor'])
  if (itemType === 'weapon') {
    level = level === 0 ? 1 : level
    let items = Array(level + 1)
      .fill(null)
      .reduce((result, _, index) => {
        if (index === 0) return result
        return [...result, ...WEAPONS_BY_LEVEL[index]]
      }, [] as (() => tWeapon)[]) as (() => tWeapon)[]

    return getRandom(items)()
  } else {
    let items = Array(level + 1)
      .fill(null)
      .reduce((result, _, index) => {
        return [...result, ...(ARMOR_BY_LEVEL[index] || [])]
      }, [] as (() => tArmor)[]) as (() => tArmor)[]
    return getRandom(items)()
  }
}
