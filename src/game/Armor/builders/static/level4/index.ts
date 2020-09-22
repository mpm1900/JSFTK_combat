import { tArmor } from '../../../type'
import { RogueCloak } from '../level3'
import { AssassinHood, AssassinCloak, AssassinBoots } from './assassin'
import { BishopMitre, BishopRobes, BishopShoes } from './bishop'
import { OldKnightArmor, OldKnightBoots, OldKnightHelmet } from './old_knight'
import { RoyalAttire, RoyalHat, RoyalShoes } from './royal'

export * from './assassin'
export * from './bishop'
export * from './old_knight'
export * from './royal'

export const ARMOR_LEVEL_4: tArmor[] = [
  AssassinHood,
  AssassinCloak,
  AssassinBoots,
  BishopMitre,
  BishopRobes,
  BishopShoes,
  OldKnightHelmet,
  OldKnightArmor,
  OldKnightBoots,
  RoyalHat,
  RoyalAttire,
  RoyalShoes,
]
