import { tEncounterReward, tEncounterChoice, tCombatEncounter } from './type'
import { getRandom } from '../../util'
import { ALL_WEAPONS } from '../Weapon/constants'
import { ALL_ARMOR } from '../Armor/objects'
import { stringArr } from '../../util/stringArr'

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
const justRandomItem = (): tEncounterReward => ({
  ...ZERO_REWARD,
  items: [getRandom([...ALL_WEAPONS(), ...ALL_ARMOR()])],
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
  console.log(previousChoice)
  console.log('get choice text')
  const previousEncounter = previousChoice
    ? previousChoice[previousChoice.value || 'left']
    : undefined
  if (previousChoice === undefined) {
    text =
      'As your party begins their journy, you travel down an empty road. You arrive at a split path, you must make a choice on which way to proceed.'
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
