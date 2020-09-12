import { tWeapon } from '../../type'
import { COMPOSITE_BOW } from './composite_bow'
import { CURVED_BOW } from './curved_bow'
import { GLASS_BOW } from './glass_bow'

export const ALL_BOWS = (): tWeapon[] => [
  COMPOSITE_BOW(),
  CURVED_BOW(),
  GLASS_BOW(),
]
