import { tEncounterReward, tCombatEncounter, tEncounter } from './type'
import { getRandom } from '../../util'
import { stringArr } from '../../util/stringArr'
import { FLOOR_CONFIGS_BY_INDEX } from './floors'
import Forest1 from '../../assets/img/forests/7.png'
import Forest2 from '../../assets/img/forests/8.png'
import Forest3 from '../../assets/img/forests/1.png'
import Dungeon1 from '../../assets/img/dungeon/3.png'
import Dungeon2 from '../../assets/img/dungeon/1.png'
import Dungeon3 from '../../assets/img/dungeon/4.png'
import Dungeon4 from '../../assets/img/dungeon/2.png'

export const ZERO_REWARD: tEncounterReward = {
  gold: 0,
  xp: 0,
  items: [],
  status: [],
  immunities: [],
}

const poisoned: tEncounterReward = {
  ...ZERO_REWARD,
  status: ['poisoned'],
}
const burning: tEncounterReward = {
  ...ZERO_REWARD,
  status: ['burning'],
}
const bleeding: tEncounterReward = {
  ...ZERO_REWARD,
  status: ['bleeding'],
}
const armorDown: tEncounterReward = {
  ...ZERO_REWARD,
  status: ['armor-down'],
}
const resDown: tEncounterReward = {
  ...ZERO_REWARD,
  status: ['resistance-down'],
}
const attackDown: tEncounterReward = {
  ...ZERO_REWARD,
  status: ['armor-down'],
}

const armorUp: tEncounterReward = {
  ...ZERO_REWARD,
  status: ['armor-up'],
}
const attackUp: tEncounterReward = {
  ...ZERO_REWARD,
  status: ['attack-up'],
}
const resUp: tEncounterReward = {
  ...ZERO_REWARD,
  status: ['resistance-up'],
}

const justGold = (gold: number) => ({
  ...ZERO_REWARD,
  gold,
})
const justXp = (xp: number) => ({
  ...ZERO_REWARD,
  xp,
})
const justRandomItem = (floor: number = 0): tEncounterReward => ({
  ...ZERO_REWARD,
  items: [getRandom(FLOOR_CONFIGS_BY_INDEX()[floor].items)],
})

export const POSSIBLE_SHINE_REWARDS = (): tEncounterReward[][] => [
  [poisoned, poisoned, ZERO_REWARD, armorUp],
  [bleeding, ZERO_REWARD, ZERO_REWARD, ZERO_REWARD, justGold(50)],
  [burning, burning, burning, ZERO_REWARD, justXp(25)],
  [poisoned, poisoned, burning, ZERO_REWARD, justRandomItem()],
  [attackDown, attackDown, ZERO_REWARD, ZERO_REWARD, justXp(25)],
  [attackDown, armorDown, resDown, ZERO_REWARD, justXp(10), justRandomItem()],
  [poisoned, attackDown, armorDown, resDown, justRandomItem()],
  [poisoned, poisoned, attackDown, ZERO_REWARD, justGold(100)],
  [burning, burning, burning, burning, justGold(10), justRandomItem()],
  [poisoned, poisoned, burning, bleeding, justRandomItem(), justRandomItem()],
  [
    burning,
    ZERO_REWARD,
    ZERO_REWARD,
    ZERO_REWARD,
    ZERO_REWARD,
    justRandomItem(),
  ],
  [
    ZERO_REWARD,
    ZERO_REWARD,
    ZERO_REWARD,
    ZERO_REWARD,
    justXp(10),
    justGold(50),
  ],
  [bleeding, resDown, armorDown, ZERO_REWARD, resUp, attackUp],
  [poisoned, ZERO_REWARD, ZERO_REWARD, attackUp],
  [poisoned, ZERO_REWARD, ZERO_REWARD, armorUp],
  [burning, ZERO_REWARD, ZERO_REWARD, resUp],
  [attackDown, armorDown, ZERO_REWARD, armorUp],
  [attackDown, resDown, ZERO_REWARD, resUp],
  [poisoned, attackDown, ZERO_REWARD, attackUp],
  [poisoned, burning, bleeding, resUp, attackUp],
]

export const getChoiceText = (
  currentEncounter: tEncounter | undefined,
  previousEncounter: tEncounter | undefined,
): string => {
  let text = ''
  if (currentEncounter === undefined) {
    text =
      'As your party begins their journey, you travel down an empty road. You arrive at a split path, you must make a choice on which way to proceed.'
  }
  if (previousEncounter?.type === 'combat') {
    text = getRandom([
      `After the fierce battle against the ${stringArr(
        (previousEncounter as tCombatEncounter).party.characters.map(
          (c) => c.name,
        ),
      )}, your party again arrives at a choice:`,
    ])
  } else if (currentEncounter) {
    text =
      'After a brief rest, your party continues their journey to dispel the evil. You feel it around you as your travel deeper. However, there now seem to be two options before you:'
  }
  return text
}

interface BgConfig {
  bg: string
  overlay: string
}
interface RootBgConfig extends BgConfig {
  completed?: BgConfig
}
export const getEncounterBg = (level: number, floor: number): RootBgConfig => {
  return ([
    [
      {
        // 0
        bg: Forest1,
        overlay: 'transparent',
        completed: {
          bg: Forest1,
          overlay: 'rgba(20,0,50,0.4)',
        },
      },
      {
        // 1
        bg: Forest1,
        overlay: 'rgba(20,0,50,0.4)',
      },
      {
        // 2
        bg: Forest1,
        overlay: 'rgba(20,0,50,0.4)',
      },
      {
        // 3
        bg: Forest1,
        overlay: 'rgba(20,0,50,0.5)',
      },
      {
        // 4
        bg: Forest1,
        overlay: 'rgba(20,0,50,0.5)',
      },
      {
        // 5
        bg: Forest2,
        overlay: 'rgba(20,0,50,0.4)',
      },
      {
        // 6
        bg: Forest2,
        overlay: 'rgba(20,0,50,0.4)',
      },
      {
        // 7
        bg: Forest2,
        overlay: 'rgba(20,0,50,0.5)',
      },
      {
        // 8
        bg: Forest2,
        overlay: 'rgba(20,0,50,0.5)',
        completed: {
          bg: Forest3,
          overlay: 'rgba(20,0,50,0.5)',
        },
      },
      {
        // 9
        bg: Forest3,
        overlay: 'rgba(20,0,50,0.5)',
        completed: {
          bg: Dungeon1,
          overlay: 'transparent',
        },
      },
      {
        // 10
        bg: Dungeon1,
        overlay: 'transparent',
      },
    ],
    [
      {
        // 0
        bg: Dungeon2,
        overlay: 'rgba(20,0,50,0.5)',
      },
      {
        // 1
        bg: Dungeon2,
        overlay: 'rgba(20,0,50,0.5)',
      },
      {
        // 2
        bg: Dungeon2,
        overlay: 'rgba(20,0,50,0.5)',
      },
      {
        // 3
        bg: Dungeon2,
        overlay: 'rgba(20,0,50,0.5)',
      },
      {
        // 4
        bg: Dungeon3,
        overlay: 'rgba(20,0,50,0.5)',
      },
      {
        // 5
        bg: Dungeon3,
        overlay: 'rgba(20,0,50,0.5)',
      },
      {
        // 6
        bg: Dungeon3,
        overlay: 'rgba(20,0,50,0.6)',
      },
      {
        // 7
        bg: Dungeon3,
        overlay: 'rgba(20,0,50,0.7)',
      },
      {
        // 8
        bg: Dungeon3,
        overlay: 'rgba(20,0,50,0.7)',
      },
      {
        // 9
        bg: Dungeon4,
        overlay: 'rgba(20,0,50,0.2)',
      },
      {
        // 10
        bg: Dungeon4,
        overlay: 'rgba(20,0,50,0.3)',
      },
    ],
    [
      {
        // 0
        bg: Forest1,
        overlay: 'transparent',
      },
    ],
  ][floor] || [])[level]
}
