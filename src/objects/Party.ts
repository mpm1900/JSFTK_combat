import { v4 } from 'uuid'
import { TIMBERWOLF } from './enemies/timberwolf'
import { VALE_IMP } from './enemies/vale_imp'
import { BEASTMAN } from './enemies/beastman'
import { BEE } from './enemies/bee'
import { BUCCANEER } from './enemies/buccaneer'
import { BANDIT } from './enemies/bandit'
import { CharacterT } from '../types'

export const PLAYER_PARTY_ID = v4()

export const ALL_ENEMY_PARTY_COMBOS = [
  [TIMBERWOLF(), TIMBERWOLF(), TIMBERWOLF()],
  [VALE_IMP(), TIMBERWOLF(), BEASTMAN()],
  [BEASTMAN(), BEASTMAN(), BEE()],
  [BEE(), BEE(), BEE()],
  [BUCCANEER()],
  [BANDIT(), BANDIT()],
]

export const ENEMY_COMBOS_BY_LEVEL: Record<number, CharacterT[][]> = {
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
