import { tArmor } from '../../../type'
import { AdventureBoots, AdventureCloak, AdventureHood } from './adventure'
import { ApprenticeHat, ApprenticeRobes, ApprenticeShoes } from './apprentice'
import { AristocratAttire, AristocratHat, AristocratShoes } from './aristocrat'
import { ChainMailArmor, ChainMailBoots, ChainMailHelmet } from './chain_mail'
import {
  GraveguardArmor,
  GraveguardBoots,
  GraveguardHelmet,
} from './graveguard'
import { HarrowedBoots, HarrowedCloak, HarrowedHood } from './harrowed'

export * from './adventure'
export * from './apprentice'
export * from './aristocrat'
export * from './chain_mail'
export * from './graveguard'
export * from './harrowed'

export const ARMOR_LEVEL_1: tArmor[] = [
  AdventureHood,
  AdventureCloak,
  AdventureBoots,
  ApprenticeHat,
  ApprenticeRobes,
  ApprenticeShoes,
  AristocratHat,
  AristocratAttire,
  AristocratShoes,
  ChainMailHelmet,
  ChainMailArmor,
  ChainMailBoots,
  GraveguardHelmet,
  GraveguardArmor,
  GraveguardBoots,
  HarrowedHood,
  HarrowedCloak,
  HarrowedBoots,
]
