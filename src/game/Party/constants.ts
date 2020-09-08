import { v4 } from 'uuid'
import { tCharacter } from '../Character/type'
import { TIMBERWOLF } from '../Character/enemies/timberwolf'
import { BEASTMAN } from '../Character/enemies/beastman'
import { VALE_IMP } from '../Character/enemies/vale_imp'
import { BEE } from '../Character/enemies/bee'
import { BANDIT } from '../Character/enemies/bandit'
import { BUCCANEER } from '../Character/enemies/buccaneer'

export const PLAYER_PARTY_ID = v4()

export const ENEMY_COMBOS_BY_LEVEL: Record<number, tCharacter[][]> = {
  0: [
    [TIMBERWOLF(), TIMBERWOLF(), TIMBERWOLF()],
    [TIMBERWOLF(), BEASTMAN()],
    [BEASTMAN(), BEASTMAN()],
    [VALE_IMP(), TIMBERWOLF()],
    [VALE_IMP()],
    [BEE()],
    [BEE(), BEASTMAN()],
    [BEE(), TIMBERWOLF()],
  ],
  1: [
    [VALE_IMP(), TIMBERWOLF(), BEASTMAN()],
    [BEASTMAN(), BEASTMAN(), BEASTMAN()],
    [BEE(), BEE(), BEE()],
    [VALE_IMP(), BEE(), BEASTMAN()],
  ],
  2: [
    [BEE(), BEE(), BEE()],
    [VALE_IMP(), BEE(), BEE()],
    [VALE_IMP(), VALE_IMP(), VALE_IMP()],
    [BANDIT(), TIMBERWOLF()],
    [BANDIT(), TIMBERWOLF(), TIMBERWOLF()],
  ],
  3: [
    [BANDIT(), BANDIT()],
    [BUCCANEER()],
    [BANDIT(), BEE(), BEE()],
    [BANDIT(), VALE_IMP(), VALE_IMP()],
    [BANDIT(), VALE_IMP(), BEE()],
    [BUCCANEER(), VALE_IMP()],
  ],
  4: [
    [BANDIT(), BANDIT(), VALE_IMP()],
    [BANDIT(), BANDIT(), BEE()],
    [BANDIT(), BANDIT(), BANDIT()],
    [BUCCANEER(), BUCCANEER()],
    [BUCCANEER(), VALE_IMP(), VALE_IMP()],
  ],
  5: [
    [BANDIT(), BANDIT(), BANDIT()],
    [BANDIT(), VALE_IMP(), BUCCANEER()],
    [BUCCANEER(), VALE_IMP(), VALE_IMP()],
    [BUCCANEER(), BUCCANEER(), BANDIT()],
    [BUCCANEER(), BUCCANEER(), BUCCANEER()],
  ],
}
