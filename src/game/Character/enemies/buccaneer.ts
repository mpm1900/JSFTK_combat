import Icon from '../../../icons/svg/delapouite/pirate-captain.svg'
import { tCharacter } from '../type'
import { ZERO_STATS, BASE_C_STATS } from '../../Stats/constants'
import { v4 } from 'uuid'
import { STAB } from '../../Skill/objects/enemy/stab'
import { ADVENTURE_BOOTS } from '../../Armor/objects/adventure_boots'
import { FUR_BOOTS } from '../../Armor/objects/fur_boots'
import { getRandom } from '../../../util'
import { ALL_ARMOR } from '../../Armor/objects'
import { ALL_WEAPONS } from '../../Weapon/constants'
import { ZERO_REWARD } from '../../Encounter/constants'

export const BUCCANEER = (): tCharacter => {
  return {
    id: v4(),
    name: 'Buccaneer',
    isCharacter: true,
    icon: Icon,
    partyId: '',
    level: 4,
    experience: 0,
    class: 'enemy',
    healthOffset: 0,
    inspirationOffset: 0,
    tags: [],
    stats: {
      ...BASE_C_STATS,
      strength: 52,
      vigor: 66,
      intelligence: 46,
      dexterity: 78,
      charisma: 64,
      agility: 78,
      luck: 50,
      armor: 1,
      resistance: 0,
      evasion: 20,
      maxHealthOffset: -31,
    },
    armor: [],
    consumables: [],
    status: [],
    immunities: [],
    weapon: {
      id: v4(),
      name: 'Buccaneer Dagger',
      itemType: 'weapon',
      rarity: 'common',
      type: 'dagger',
      stat: 'strength',
      twoHand: false,
      breakable: false,
      damage: {
        value: 12,
        range: 'melee',
        type: 'physical',
      },
      stats: ZERO_STATS,
      skills: [STAB],
      immunities: [],
    },
    possibleRewards: [
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 15,
      },
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 16,
      },
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 16,
      },
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 17,
        items: [getRandom(ALL_ARMOR())],
      },
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 18,
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
