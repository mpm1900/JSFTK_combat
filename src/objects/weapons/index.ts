import { WeaponT } from '../../types'
import { ALL_TOMES } from './tome'
import { ALL_LUTES } from './lute'
import { ALL_BLUNT } from './blunt'

export const ALL_WEAPONS = (): WeaponT[] => [
  ...ALL_BLUNT(),
  ...ALL_LUTES(),
  ...ALL_TOMES(),
]
