import { v4 } from 'uuid'
import { TIMBERWOLF } from './enemies/timberwolf'
import { VALE_IMP } from './enemies/vale_imp'
import { BEASTMAN } from './enemies/beastman'
import { BEE } from './enemies/bee'
import { BUCCANEER } from './enemies/buccaneer'
import { BANDIT } from './enemies/bandit'

export const PLAYER_PARTY_ID = v4()

export const ALL_ENEMY_PARTY_COMBOS = [
  [TIMBERWOLF(), TIMBERWOLF(), TIMBERWOLF()],
  [VALE_IMP(), TIMBERWOLF(), BEASTMAN()],
  [BEASTMAN(), BEASTMAN(), BEE()],
  [BEE(), BEE(), BEE()],
  [BUCCANEER()],
  [BANDIT(), BANDIT()],
]
