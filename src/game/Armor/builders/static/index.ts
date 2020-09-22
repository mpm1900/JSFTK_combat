import { tArmor } from '../../type'
import { ARMOR_LEVEL_0 } from './level0'
import { ARMOR_LEVEL_1 } from './level1'
import { ARMOR_LEVEL_2 } from './level2'
import { ARMOR_LEVEL_3 } from './level3'
import { ARMOR_LEVEL_4 } from './level4'

export * from './level0'
export * from './level1'
export * from './level2'
export * from './level3'
export * from './level4'

export const ALL_ARMOR: tArmor[] = [
  ...ARMOR_LEVEL_0,
  ...ARMOR_LEVEL_1,
  ...ARMOR_LEVEL_2,
  ...ARMOR_LEVEL_3,
  ...ARMOR_LEVEL_4,
]

export const ARMOR_BY_LEVEL: Record<number, tArmor[]> = {
  0: ARMOR_LEVEL_0,
  1: ARMOR_LEVEL_1,
  2: ARMOR_LEVEL_2,
  3: ARMOR_LEVEL_3,
  4: ARMOR_LEVEL_4,
}

export const getUpgradeOptions = (armor?: tArmor): tArmor[] => {
  return armor ? ALL_ARMOR.filter((a) => armor.upgrades.includes(a.id)) : []
}
