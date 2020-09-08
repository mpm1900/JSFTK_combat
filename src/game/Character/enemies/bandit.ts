import { getRandom } from '../../../util'
import Bandit from '../../../icons/svg/delapouite/bandit.svg'
import { tCharacter } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS, BASE_C_STATS } from '../../Stats/constants'
import { EXPLORERS_BOOTS } from '../../Armor/objects/explorers_boots'
import { EXPLORERS_HAT } from '../../Armor/objects/explorers_hat'
import { ALL_ARMOR } from '../../Armor/objects'
import { ALL_WEAPONS } from '../../Weapon/constants'
import { STAB } from '../../Skill/objects/enemy/stab'

export const BANDIT = (): tCharacter => {
  return {
    id: v4(),
    name: 'Bandit',
    isCharacter: true,
    icon: Bandit,
    partyId: '',
    level: 2,
    experience: 0,
    class: 'enemy',
    healthOffset: 0,
    inspirationOffset: 0,
    tags: [],
    stats: {
      ...BASE_C_STATS,
      strength: 76,
      vigor: 50,
      intelligence: 40,
      dexterity: 52,
      charisma: 72,
      agility: 61,
      luck: 50,
      armor: 4,
      resistance: 0,
      evasion: 10,
      maxHealthOffset: -20,
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