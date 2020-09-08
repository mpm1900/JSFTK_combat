import { v4 } from 'uuid'
import { tCharacter } from '../Character/type'
import { TIMBERWOLF } from '../Character/enemies/timberwolf'
import { BEASTMAN } from '../Character/enemies/beastman'
import { VALE_IMP } from '../Character/enemies/vale_imp'
import { BEE } from '../Character/enemies/bee'
import { BANDIT } from '../Character/enemies/bandit'
import { BUCCANEER } from '../Character/enemies/buccaneer'
import { CULTIST } from '../Character/enemies/cultist'

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
    [CULTIST()],
  ],
  1: [
    [VALE_IMP(), TIMBERWOLF(), BEASTMAN()],
    [BEASTMAN(), BEASTMAN(), BEASTMAN()],
    [BEE(), BEE(), BEE()],
    [VALE_IMP(), BEE(), BEASTMAN()],
    [CULTIST()],
  ],
  2: [
    [BEE(), BEE(), BEE()],
    [VALE_IMP(), BEE(), BEE()],
    [VALE_IMP(), VALE_IMP(), VALE_IMP()],
    [BANDIT(), TIMBERWOLF()],
    [BANDIT(), TIMBERWOLF(), TIMBERWOLF()],
    [CULTIST()],
  ],
  3: [
    [CULTIST(), CULTIST()],
    [CULTIST(), BANDIT()],
    [BANDIT(), BANDIT()],
    [BUCCANEER()],
    [BANDIT(), BEE(), BEE()],
    [CULTIST(), BEE(), BEE()],
    [CULTIST(), BANDIT(), BEE()],
    [BANDIT(), VALE_IMP(), VALE_IMP()],
    [CULTIST(), CULTIST(), VALE_IMP()],
    [VALE_IMP(), CULTIST(), VALE_IMP()],
    [BANDIT(), VALE_IMP(), BEE()],
    [BUCCANEER(), VALE_IMP()],
  ],
  4: [
    [CULTIST(), BANDIT(), VALE_IMP()],
    [CULTIST(), CULTIST(), BEE()],
    [CULTIST(), VALE_IMP(), CULTIST()],
    [CULTIST(), CULTIST(), CULTIST()],
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
    [CULTIST(), CULTIST(), CULTIST()],
    [BUCCANEER(), BUCCANEER(), BUCCANEER()],
  ],
}