import { WOODCUTTERS_AXE } from '../../Weapon/objects/axe'
import {
  CRUDE_CLUB,
  GLASS_HAMMER,
  MACE,
  WAR_PICK,
} from '../../Weapon/objects/blunt'
import { COMPOSITE_BOW, CURVED_BOW, GLASS_BOW } from '../../Weapon/objects/bow'
import {
  ARCHLUTE,
  BARBAT,
  DECENT_LUTE,
  FANCY_LUTE,
} from '../../Weapon/objects/lute'
import { BANDIT_GLAIVE } from '../../Weapon/objects/spear'
import { BOKKEN } from '../../Weapon/objects/sword'
import {
  APPRENTICES_TOME,
  DUSTY_BOOK,
  MAGES_TOME,
} from '../../Weapon/objects/tome'
import { ALL_FLOOR_1_ARMOR } from '../../Armor/objects/index'
import { tFloorConfig } from '../type'
import { TIMBERWOLF } from '../../Character/enemies/timberwolf'
import { BEASTMAN } from '../../Character/enemies/beastman'
import { VALE_IMP } from '../../Character/enemies/vale_imp'
import { BEE } from '../../Character/enemies/bee'
import { CULTIST } from '../../Character/enemies/cultist'
import { BANDIT } from '../../Character/enemies/bandit'
import { BUCCANEER } from '../../Character/enemies/buccaneer'

const FLOOR_1_WEAPONS = () => [
  // blunt
  CRUDE_CLUB(),
  GLASS_HAMMER(),
  MACE(),
  WAR_PICK(),
  // axe
  WOODCUTTERS_AXE(),
  // bow
  COMPOSITE_BOW(),
  CURVED_BOW(),
  GLASS_BOW(),
  // dagger
  // lute
  ARCHLUTE(),
  BARBAT(),
  DECENT_LUTE(),
  FANCY_LUTE(),
  // magic-staff
  // pistol
  // spear
  BANDIT_GLAIVE(),
  // sword
  BOKKEN(),
  // tome
  APPRENTICES_TOME(),
  DUSTY_BOOK(),
  MAGES_TOME(),
  // torch
]

export const FloorConfig1: tFloorConfig = {
  items: [...FLOOR_1_WEAPONS(), ...ALL_FLOOR_1_ARMOR()],
  enemies: {
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
  },
}
