import { tArmor } from '../../../type'
import { AdventureBoots, AdventureCloak, AdventureHood } from './adventure'
import { ApprenticeHat, ApprenticeRobes, ApprenticeShoes } from './apprentice'
import { AristocratAttire, AristocratHat, AristocratShoes } from './aristocrat'
import {
  GraveguardArmor,
  GraveguardBoots,
  GraveguardHelmet,
} from './graveguard'

export * from './adventure'
export * from './apprentice'
export * from './aristocrat'
export * from './graveguard'

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
  GraveguardHelmet,
  GraveguardArmor,
  GraveguardBoots,
]
