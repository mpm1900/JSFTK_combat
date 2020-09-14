import { getRandom } from '../../../util'
import Cultist from '../../../icons/svg/lorc/cultist.svg'
import { tCharacter } from '../type'
import { BASE_C_STATS } from '../../Stats/constants'
import { TORCH } from '../../Skill/enemy/torch'
import { ZERO_REWARD } from '../../Encounter/constants'
import { BASE_CHARACTER } from '../constants'
import { BASE_WEAPON } from '../../Weapon/constants'
import { getRandomItem } from '../../Item/util'
import { ARCANE } from '../../Skill/skills/catalyst'
import { BLAST } from '../../Skill/enemy/arcane'

export const CULTIST = (): tCharacter => {
  return {
    ...BASE_CHARACTER(),
    name: 'Cultist',
    icon: Cultist,
    level: 1,
    stats: {
      ...BASE_C_STATS,
      strength: 50,
      vigor: 50,
      intelligence: 75,
      dexterity: 52,
      charisma: 72,
      agility: getRandom([68, 69, 70, 71]),
      luck: 50,
      armor: 1,
      resistance: 4,
      evasion: 15,
      maxHealthOffset: -19,
    },
    weapon: {
      ...BASE_WEAPON(),
      name: 'Cultist Torch',
      type: 'enemy',
      stat: 'intelligence',
      damage: {
        value: 14,
        range: 'melee',
        type: 'magic',
      },
      skills: [TORCH, ARCANE, BLAST],
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
        items: [],
      },
      {
        ...ZERO_REWARD,
        gold: 20,
        xp: 20,
        items: [getRandomItem(1)],
      },
      {
        ...ZERO_REWARD,
        gold: 80,
        xp: 20,
        items: [getRandomItem(2)],
      },
    ],
  }
}
