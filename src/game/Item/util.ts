import { getRandom } from '../../util'
import { makeRandom } from '../../util/makeRandom'
import { ARMOR_BY_LEVEL } from '../Armor/builders/sets'
import { tArmor } from '../Armor/type'
import { WEAPONS_BY_LEVEL } from '../Weapon/builders/objects'
import { tWeapon } from '../Weapon/type'
import { tItemType } from './type'

export const getRandomItem = (
  level: number,
  min: number = 0,
): tWeapon | tArmor => {
  const itemType: tItemType = makeRandom(100) > 15 ? 'weapon' : 'armor'
  if (itemType === 'weapon') {
    level = level === 0 ? 1 : level
    let items = Array(level + 1)
      .fill(null)
      .reduce((result, _, index) => {
        if (index === 0) return result
        if (index < min) return result
        return [...result, ...WEAPONS_BY_LEVEL[index]]
      }, [] as (() => tWeapon)[]) as (() => tWeapon)[]

    const random = getRandom(items)
    return random()
  } else {
    let items = Array(level + 1)
      .fill(null)
      .reduce((result, _, index) => {
        if (index < min) return result
        return [...result, ...(ARMOR_BY_LEVEL[index] || [])]
      }, [] as (() => tArmor)[]) as (() => tArmor)[]
    const random = getRandom(items)
    if (!random) return getRandomItem(level, min)
    return random()
  }
}
