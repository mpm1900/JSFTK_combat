import { tCharacter, tCharacterClass } from './type'
import { Theme } from '../../theme'
import { v4 } from 'uuid'
import { BASE_C_STATS } from '../Stats/constants'

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
  executioner: '#3c4652',
  patrician: '#472321',
  student: '#665166',
  ranger: '#334233',
  drifter: '#111',
}

export const BASE_CHARACTER = (): tCharacter => {
  return {
    id: v4(),
    name: '',
    isCharacter: true,
    icon: '',
    partyId: '',
    level: 0,
    experience: 0,
    class: 'enemy',
    healthOffset: 0,
    inspirationOffset: 0,
    tags: [],
    stats: BASE_C_STATS,
    weapon: undefined,
    armor: [],
    consumables: [],
    status: [],
    immunities: [],
    possibleRewards: [],
  }
}
