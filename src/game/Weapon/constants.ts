import { tCharacterClass } from '../Character/type'
import { tWeapon } from './type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../Stats/constants'
import { BUTCHERS_AXE } from './builders/objects/axe'
import { RANGERS_BOW } from './builders/objects/bow'
import { STUDENTS_CATALYST } from './builders/objects/catalyst'
import { PATRICIANS_CHIME } from './builders/objects/chime'

export const CLASS_WEAPONS: Record<tCharacterClass, tWeapon | undefined> = {
  blacksmith: BUTCHERS_AXE(),
  hunter: RANGERS_BOW(),
  scholar: STUDENTS_CATALYST(),
  bard: PATRICIANS_CHIME(),
  hobo: undefined,
  enemy: undefined,
}

export const BASE_WEAPON = (): tWeapon => {
  return {
    id: v4(),
    name: '',
    itemType: 'weapon',
    rarity: 'common',
    type: 'fist',
    stat: 'strength',
    goldValue: 0,
    twoHand: false,
    breakable: false,
    damage: {
      value: 0,
      range: 'melee',
      type: 'physical',
    },
    stats: ZERO_STATS,
    skills: [],
    immunities: [],
  }
}
