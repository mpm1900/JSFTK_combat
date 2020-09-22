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
import { tArmor } from '../Armor/type'
import {
  CONSECRATED_BEAST,
  CONSECRATED_BEAST_ID,
  FOREST_MIND_ID,
  LICH,
  LICH_ID,
} from '../Character/bosses'
import { LICH_SWORD } from './builders/unique/boss_lich'
import { HEART_OF_THE_BEAST } from '../Armor/builders/uniques/heart_of_the_beast'
import { MERCENARY_HAMMER } from './builders/objects/hammer'
import { CORSAIR_PISTOL } from './builders/objects/pistol'
import { MINDSTEM_CATALYST } from './builders/unique/boss_mind'

export const CLASS_WEAPONS: Record<tCharacterClass, tWeapon | undefined> = {
  executioner: EXECUTIONER_AXE(),
  mercenary: MERCENARY_HAMMER(),
  ranger: RANGERS_BOW(),
  reaper: FARMER_SCYTHE(),
  student: STUDENTS_CATALYST(),
  patrician: PATRICIANS_CHIME(),
  corsair: CORSAIR_PISTOL(),
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

export const BOSS_ITEMS: Record<string, (tWeapon | tArmor)[]> = {
  [LICH_ID]: [LICH_SWORD],
  [FOREST_MIND_ID]: [MINDSTEM_CATALYST],
  [CONSECRATED_BEAST_ID]: [TEST_WEAPON()],
}
