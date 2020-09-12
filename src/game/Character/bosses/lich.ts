import { getRandom } from '../../../util'
import Lich from '../../../icons/svg/delapouite/overlord-helm.svg'
import { tCharacter } from '../type'
import { v4 } from 'uuid'
import { ZERO_STATS, BASE_C_STATS } from '../../Stats/constants'
import { ALL_ARMOR } from '../../Armor/objects'
import { ALL_WEAPONS } from '../../Weapon/constants'
import { LICH_DRAIN } from '../../Skill/objects/enemy/lich_drain'
import { LICH_SCREECH } from '../../Skill/objects/enemy/lich_screech'
import { LICH_MASS_SCREECH } from '../../Skill/objects/enemy/lich_mass_screech'
import { LICH_SMITE } from '../../Skill/objects/enemy/lich_smite'

export const LICH = (): tCharacter => {
  return {
    id: v4(),
    name: 'Lich',
    isCharacter: true,
    icon: Lich,
    partyId: '',
    level: 5,
    experience: 0,
    class: 'enemy',
    healthOffset: 0,
    inspirationOffset: 0,
    tags: ['undead'],
    stats: {
      ...BASE_C_STATS,
      strength: 82,
      vigor: 64,
      intelligence: 70,
      dexterity: 48,
      charisma: 60,
      agility: 80,
      luck: 50,
      armor: 6,
      resistance: 8,
      evasion: 16,
    },
    armor: [],
    consumables: [],
    status: [],
    immunities: ['bleeding', 'stunned'],
    weapon: {
      id: v4(),
      name: 'Lich Sword',
      itemType: 'weapon',
      rarity: 'common',
      type: 'sword',
      stat: 'strength',
      twoHand: false,
      breakable: false,
      goldValue: 0,
      damage: {
        value: 30,
        range: 'melee',
        type: 'physical',
      },
      stats: ZERO_STATS,
      skills: [LICH_DRAIN, LICH_SCREECH, LICH_MASS_SCREECH, LICH_SMITE],
      immunities: [],
    },
    possibleRewards: [],
  }
}
