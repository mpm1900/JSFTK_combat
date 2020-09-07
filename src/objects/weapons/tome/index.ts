import { WeaponT } from '../../../types'
import { APPRENTICES_TOME } from './apprentices_tome'
import { DUSTY_BOOK } from './dusty_book'
import { MAGES_TOME } from './mages_tome'

export const ALL_TOMES = (): WeaponT[] => [
  MAGES_TOME(),
  APPRENTICES_TOME(),
  DUSTY_BOOK(),
]
