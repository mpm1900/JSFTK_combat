import { getRandom } from '../../util'
import { makeRandom } from '../../util/makeRandom'
import { ARMOR_BY_LEVEL } from '../Armor/builders/sets'
import { tArmor } from '../Armor/type'
import { WEAPONS_BY_LEVEL } from '../Weapon/builders/objects'
import { tWeapon } from '../Weapon/type'
import { tItem, tItemRarity, tItemType } from './type'

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

const ITEM_RARITY_MAP: Record<tItemRarity, number> = {
  common: 0,
  uncommon: 1,
  rare: 2,
  epic: 3,
  mythic: 4,
}
const REV_ITEM_RARITY_MAP: Record<number, tItemRarity> = {
  0: 'common',
  1: 'uncommon',
  2: 'rare',
  3: 'epic',
  4: 'mythic',
}
export const getHighestRarity = (items: tItem[]): tItemRarity => {
  return items.reduce((result, item) => {
    const value = ITEM_RARITY_MAP[item.rarity]
    const check = ITEM_RARITY_MAP[result]
    return value > check ? item.rarity : result
  }, 'common' as tItemRarity)
}
