import { noneg } from '../../util'
import { tCharacterClass } from './type'
import { Theme } from '../../theme'

export const CHARACTER_XP_MAX: Record<number, number> = {
  [-1]: 0,
  0: 25,
  1: 45,
  2: 85,
  3: 135,
  4: 215,
  5: 295,
  6: 425,
  7: 675,
  8: 925,
  9: 1257,
  10: 1925,
  11: 1400,
  12: 2200,
}

export const CHARACTER_CLASS_COLORS: Record<tCharacterClass, string> = {
  enemy: Theme.enemyPartyColor,
  blacksmith: '#5d6a6e',
  bard: '#5e5245',
  scholar: '#665166',
  hunter: '#516951',
}
