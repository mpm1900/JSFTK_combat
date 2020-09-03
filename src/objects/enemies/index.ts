import { CharacterT } from '../../types'
import { TIMBERWOLF } from './timberwolf'
import { VALE_IMP } from './vale_imp'
import { BEASTMAN } from './beastman'

export const ALL_ENEMIES: (() => CharacterT)[] = [
  TIMBERWOLF,
  VALE_IMP,
  BEASTMAN,
]
