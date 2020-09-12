import { getRandom } from '../../../util'
import Cultist from '../../../icons/svg/lorc/cultist.svg'
import { tCharacter } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS, BASE_C_STATS } from '../../Stats/constants'
import { ALL_ARMOR } from '../../Armor/objects'
import { ALL_WEAPONS } from '../../Weapon/constants'
import { TORCH } from '../../Skill/objects/enemy/torch'
import { IMPALE } from '../../Skill/objects/enemy/impale'
import { ZERO_REWARD } from '../../Encounter/constants'

export const CULTIST = (): tCharacter => {
  return {
    id: v4(),
    name: 'Cultist',
    isCharacter: true,
    icon: Cultist,
    partyId: '',
    level: 1,
    experience: 0,
    class: 'enemy',
    healthOffset: 0,
    inspirationOffset: 0,
    tags: [],
    stats: {
      ...BASE_C_STATS,
      strength: 50,
      vigor: 50,
      intelligence: 75,
      dexterity: 52,
      charisma: 72,
      agility: 70,
      luck: 50,
      armor: 1,
      resistance: 4,
      evasion: 15,
      maxHealthOffset: -19,
    },
    armor: [],
    consumables: [],
    status: [],
    immunities: [],
    weapon: {
      id: v4(),
      name: 'Cultist Torch',
      itemType: 'weapon',
      rarity: 'common',
      type: 'magic-staff',
      stat: 'intelligence',
      goldValue: 0,
      twoHand: true,
      breakable: false,
      damage: {
        value: 14,
        range: 'melee',
        type: 'magic',
      },
      stats: ZERO_STATS,
      skills: [TORCH, IMPALE],
      immunities: [],
    },
    possibleRewards: [
      {
        ...ZERO_REWARD,
        gold: 10,
        xp: 12,
      },
      {
        ...ZERO_REWARD,
        gold: 15,
        xp: 13,
      },
      {
        ...ZERO_REWARD,
        gold: 15,
        xp: 13,
      },
      {
        ...ZERO_REWARD,
        gold: 15,
        xp: 13,
      },
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 20,
        items: [getRandom(ALL_ARMOR())],
      },
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 20,
        items: [getRandom(ALL_ARMOR())],
      },
      {
        ...ZERO_REWARD,
        gold: 80,
        xp: 20,
        items: [getRandom(ALL_ARMOR()), getRandom(ALL_WEAPONS())],
      },
    ],
  }
}
