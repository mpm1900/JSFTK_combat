import { tCharacterClass } from '../Character/type'
import { tWeapon } from './type'
import { v4 } from 'uuid'
import { ZERO_STATS } from '../Stats/constants'
import { EXECUTIONER_AXE, IRON_AXE } from './builders/objects/axe'
import { IRON_BOW, RANGERS_BOW } from './builders/objects/bow'
import { IRON_CATALYST, STUDENTS_CATALYST } from './builders/objects/catalyst'
import { IRON_CHIME, PATRICIANS_CHIME } from './builders/objects/chime'
import { FARMER_SCYTHE, IRON_SCYTHE } from './builders/objects/scythe'
import { TEST_WEAPON } from './builders/unique/test_weapon'

export const CLASS_WEAPONS: Record<tCharacterClass, tWeapon | undefined> = {
  /*
  executioner: TEST_WEAPON(),
  ranger: IRON_BOW(),
  reaper: IRON_SCYTHE(),
  student: IRON_CATALYST(),
  patrician: IRON_CHIME(),
  */
  executioner: EXECUTIONER_AXE(),
  ranger: RANGERS_BOW(),
  reaper: FARMER_SCYTHE(),
  student: STUDENTS_CATALYST(),
  patrician: PATRICIANS_CHIME(),
  drifter: undefined,
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
