import { tArmor } from '../../../type'
import { AntiquatedAttire, AntiquatedHat, AntiquatedShoes } from './antiquated'
import { BoneArmor, BoneBoots, BoneHelmet } from './bone'
import { HunterCloak, HunterBoots, HunterHood } from './hunter'
import { IronArmor, IronBoots, IronHelmet } from './iron'
import { NoviceHat, NoviceRobes, NoviceShoes } from './novice'

export * from './antiquated'
export * from './bone'
export * from './hunter'
export * from './iron'
export * from './novice'

export const ARMOR_LEVEL_2: tArmor[] = [
  AntiquatedHat,
  AntiquatedAttire,
  AntiquatedShoes,
  BoneHelmet,
  BoneArmor,
  BoneBoots,
  HunterHood,
  HunterCloak,
  HunterBoots,
  IronHelmet,
  IronArmor,
  IronBoots,
  NoviceHat,
  NoviceRobes,
  NoviceShoes,
]
