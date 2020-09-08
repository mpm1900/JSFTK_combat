import Bee from '../../../icons/svg/lorc/bee.svg'
import { v4 } from 'uuid'
import { tCharacter } from '../type'
import { ZERO_STATS, BASE_C_STATS } from '../../Stats/constants'
import { STING, INFECTIOUS_STING } from '../../Skill/objects/enemy/sting'
import { getRandom } from '../../../util'
import { ALL_ARMOR } from '../../Armor/objects'
import { GODSBEARD } from '../../Consumable/objects/godsbeard'

export const BEE = (): tCharacter => {
  return {
    id: v4(),
    name: 'Bee',
    isCharacter: true,
    icon: Bee,
    partyId: '',
    level: 1,
    experience: 0,
    class: 'enemy',
    healthOffset: 0,
    inspirationOffset: 0,
    tags: [],
    stats: {
      ...BASE_C_STATS,
      vigor: -80,
      strength: 30,
      intelligence: 30,
      dexterity: 52,
      charisma: 30,
      agility: 80,
      luck: 0,
      armor: 0,
      resistance: 0,
      evasion: 17,
      maxHealthOffset: -4,
    },
    armor: [],
    consumables: [],
    status: [],
    immunities: [],
    weapon: {
      id: v4(),
      name: 'Bee Stinger',
      itemType: 'weapon',
      rarity: 'common',
      type: 'enemy',
      stat: 'dexterity',
      twoHand: true,
      breakable: false,
      damage: {
        value: 12,
        range: 'melee',
        type: 'physical',
      },
      stats: ZERO_STATS,
      skills: [STING, INFECTIOUS_STING],
      immunities: [],
    },
    possibleRewards: [
      {
        gold: 1,
        xp: 12,
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
        gold: 1,
        xp: 12,
        items: [getRandom(ALL_ARMOR())],
        consumables: [],
      },
      {
        gold: 1,
        xp: 12,
        items: [],
        consumables: [GODSBEARD()],
      },
    ],
  }
}