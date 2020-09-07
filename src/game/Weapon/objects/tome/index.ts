import { APPRENTICES_TOME } from './apprentices_tome'
import { DUSTY_BOOK } from './dusty_book'
import { MAGES_TOME } from './mages_tome'
import { tWeapon } from '../../type'

export const ALL_TOMES = (): tWeapon[] => [
  MAGES_TOME(),
  APPRENTICES_TOME(),
  DUSTY_BOOK(),
]
