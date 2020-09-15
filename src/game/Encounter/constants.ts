import { tEncounterReward, tEncounterChoice, tCombatEncounter } from './type'
import { getRandom } from '../../util'
import { stringArr } from '../../util/stringArr'
import { FLOOR_CONFIGS_BY_INDEX } from './floors'
import Forest1 from '../../assets/img/forests/7.png'
import Forest2 from '../../assets/img/forests/8.png'
import Forest3 from '../../assets/img/forests/1.png'
import Dungeon1 from '../../assets/img/dungeon/3.png'
import Dungeon2 from '../../assets/img/dungeon/1.png'

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
  [poisoned, ZERO_REWARD, armorUp],
  [ZERO_REWARD, ZERO_REWARD, ZERO_REWARD, justGold(50)],
  [burning, burning, ZERO_REWARD, justXp(25)],
  [poisoned, burning, ZERO_REWARD, justRandomItem()],
  [attackDown, ZERO_REWARD, ZERO_REWARD, justXp(25)],
  [armorDown, resDown, ZERO_REWARD, justXp(10), justRandomItem()],
  [attackDown, armorDown, resDown, justRandomItem()],
  [poisoned, attackDown, ZERO_REWARD, justGold(100)],
  [burning, burning, burning, justGold(10), justRandomItem()],
  [poisoned, burning, bleeding, justRandomItem(), justRandomItem()],
  [ZERO_REWARD, ZERO_REWARD, ZERO_REWARD, ZERO_REWARD, justRandomItem()],
  [ZERO_REWARD, ZERO_REWARD, ZERO_REWARD, justXp(10), justGold(50)],
  [resDown, armorDown, ZERO_REWARD, resUp, attackUp],
  [ZERO_REWARD, ZERO_REWARD, attackUp],
  [ZERO_REWARD, ZERO_REWARD, armorUp],
  [ZERO_REWARD, ZERO_REWARD, resUp],
  [armorDown, ZERO_REWARD, armorUp],
  [resDown, ZERO_REWARD, resUp],
  [attackDown, ZERO_REWARD, attackUp],
  [poisoned, bleeding, resUp, attackUp],
]

export const getChoiceText = (
  currentChoice: tEncounterChoice | undefined,
  previousChoice: tEncounterChoice | undefined,
): string => {
  let text = ''
  const previousEncounter = previousChoice
    ? previousChoice.choices[previousChoice.chosen || 0]
    : undefined
  if (previousChoice === undefined) {
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
  } else if (previousChoice) {
    text =
      'After a brief rest, your party continues their journey to dispel the evil. You feel it around you as your travel deeper. However, there now seem to be two options before you:'
  }
  if (currentChoice?.depth === 11) {
    text =
      'Your party has traveled far, but it is now time for the final fight.'
  }
  return text
}

export const getEncounterBg = (
  level: number,
  floor: number,
): { bg: string; overlay: string } => {
  return [
    [
      {
        // 0
        bg: Forest1,
        overlay: 'transparent',
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
      },
      {
        // 9
        bg: Forest3,
        overlay: 'rgba(20,0,50,0.5)',
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
    ],
  ][floor][level]
}
