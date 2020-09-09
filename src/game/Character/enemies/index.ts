import { TIMBERWOLF } from './timberwolf'
import { VALE_IMP } from './vale_imp'
import { BEASTMAN } from './beastman'
import { BANDIT } from './bandit'
import { BEE } from './bee'
import { BUCCANEER } from './buccaneer'
import { tCharacter } from '../type'

export const ALL_ENEMIES: (() => tCharacter)[] = [
  BANDIT,
  BEASTMAN,
  BEE,
  BUCCANEER,
  TIMBERWOLF,
  VALE_IMP,
]
