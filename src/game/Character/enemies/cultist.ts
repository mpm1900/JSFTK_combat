import { getRandom } from '../../../util'
import Cultist from '../../../icons/svg/lorc/cowled.svg'
import { tCharacter } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS, BASE_C_STATS } from '../../Stats/constants'
import { EXPLORERS_BOOTS } from '../../Armor/objects/explorers_boots'
import { EXPLORERS_HAT } from '../../Armor/objects/explorers_hat'
import { ALL_ARMOR } from '../../Armor/objects'
import { ALL_WEAPONS } from '../../Weapon/constants'
import { TORCH } from '../../Skill/objects/enemy/torch'
import { IMPALE } from '../../Skill/objects/enemy/impale'

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
        gold: 20,
        xp: 20,
        items: [],
        consumables: [],
      },
      {
        gold: 1,
        xp: 12,
        items: [],
        consumables: [],
      },
      {
        gold: 20,
        xp: 20,
        items: [EXPLORERS_BOOTS()],
        consumables: [],
      },
      {
        gold: 20,
        xp: 20,
        items: [EXPLORERS_HAT()],
        consumables: [],
      },
      {
        gold: 80,
        xp: 20,
        items: [getRandom(ALL_ARMOR())],
        consumables: [],
      },
      {
        gold: 80,
        xp: 20,
        items: [getRandom(ALL_ARMOR()), getRandom(ALL_WEAPONS())],
        consumables: [],
      },
    ],
  }
}
