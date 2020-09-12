import Wolf from '../../../icons/svg/lorc/wolf-head.svg'
import { tCharacter } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS, BASE_C_STATS } from '../../Stats/constants'
import { BITE } from '../../Skill/objects/enemy/bite'
import { getRandom } from '../../../util'
import { ALL_WEAPONS } from '../../Weapon/constants'
import { ALL_ARMOR } from '../../Armor/objects'
import { ZERO_REWARD } from '../../Encounter/constants'

export const TIMBERWOLF = (): tCharacter => {
  return {
    id: v4(),
    name: 'Timberwolf',
    isCharacter: true,
    icon: Wolf,
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
      strength: 52,
      intelligence: 40,
      dexterity: 52,
      charisma: 30,
      agility: getRandom([60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70]),
      luck: 50,
      armor: 0,
      resistance: 0,
      evasion: 10,
      maxHealthOffset: -1,
    },
    armor: [],
    consumables: [],
    status: [],
    immunities: [],
    weapon: {
      id: v4(),
      name: 'Wolf Fangs',
      itemType: 'weapon',
      rarity: 'common',
      type: 'enemy',
      stat: 'dexterity',
      goldValue: 0,
      twoHand: true,
      breakable: false,
      damage: {
        value: 7,
        range: 'melee',
        type: 'physical',
      },
      stats: ZERO_STATS,
      skills: [BITE],
      immunities: [],
    },
    possibleRewards: [
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 3,
      },
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 3,
      },
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 3,
      },
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 3,
      },
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 3,
      },
      {
        ...ZERO_REWARD,
        gold: 4,
        xp: 3,
      },
      {
        ...ZERO_REWARD,
        gold: 19,
        xp: 3,
        items: [getRandom([...ALL_WEAPONS(), ...ALL_ARMOR()])],
      },
    ],
  }
}
