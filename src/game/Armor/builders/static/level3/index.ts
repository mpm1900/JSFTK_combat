import { tArmor } from '../../../type'
import {
  FallenRaiderArmor,
  FallenRaiderBoots,
  FallenRaiderHelmet,
} from './fallen_raider'
import {
  NecromancerCowl,
  NecromancerRobes,
  NecromancerWraps,
} from './necromancer'
import { NobleAttire, NobleHat, NobleShoes } from './noble'
import { RogueBoots, RogueCloak, RogueHood } from './rogue'

export * from './fallen_raider'
export * from './necromancer'
export * from './noble'
export * from './rogue'

export const ARMOR_LEVEL_3: tArmor[] = [
  FallenRaiderHelmet,
  FallenRaiderArmor,
  FallenRaiderBoots,
  NecromancerCowl,
  NecromancerRobes,
  NecromancerWraps,
  NobleHat,
  NobleAttire,
  NobleShoes,
  RogueHood,
  RogueCloak,
  RogueBoots,
]
