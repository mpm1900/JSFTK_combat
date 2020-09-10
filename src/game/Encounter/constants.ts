import { tEncounterReward } from './type'
import { getRandom } from '../../util'
import { ALL_ARMOR } from '../Armor/objects'
import { ALL_WEAPONS } from '../Weapon/constants'

export const ZERO_REWARD: tEncounterReward = {
  gold: 0,
  xp: 0,
  items: [],
  status: [],
  immunities: [],
}

export const POSSIBLE_SHINE_REWARDS_BY_VALUE: Record<
  number,
  tEncounterReward[]
> = {
  0: [
    { ...ZERO_REWARD },
    { ...ZERO_REWARD, status: ['poisoned'] },
    { ...ZERO_REWARD, status: ['cursed'] },
    { ...ZERO_REWARD, status: ['burning'] },
    { ...ZERO_REWARD, status: ['armor-down'] },
    { ...ZERO_REWARD, status: ['attack-down'] },
    { ...ZERO_REWARD, status: ['resistance-down'] },
  ],
  1: [
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD, gold: 100 },
    { ...ZERO_REWARD, xp: 25 },
    { ...ZERO_REWARD, status: ['armor-down'] },
    { ...ZERO_REWARD, status: ['attack-down'] },
    { ...ZERO_REWARD, status: ['resistance-down'] },
    { ...ZERO_REWARD, status: ['armor-up'] },
    { ...ZERO_REWARD, status: ['attack-up'] },
    { ...ZERO_REWARD, status: ['resistance-up'] },
  ],
  2: [
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD, gold: 100 },
    { ...ZERO_REWARD, xp: 25 },
    { ...ZERO_REWARD, status: ['armor-down'] },
    { ...ZERO_REWARD, status: ['attack-down'] },
    { ...ZERO_REWARD, status: ['resistance-down'] },
    { ...ZERO_REWARD, status: ['armor-up'] },
    { ...ZERO_REWARD, status: ['attack-up'] },
    { ...ZERO_REWARD, status: ['resistance-up'] },
    { ...ZERO_REWARD, items: [getRandom([...ALL_ARMOR(), ...ALL_WEAPONS()])] },
  ],
  3: [
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD },
    { ...ZERO_REWARD, gold: 100 },
    { ...ZERO_REWARD, xp: 25 },
    { ...ZERO_REWARD, status: ['armor-up'] },
    { ...ZERO_REWARD, status: ['attack-up'] },
    { ...ZERO_REWARD, status: ['resistance-up'] },
    { ...ZERO_REWARD, items: [getRandom([...ALL_ARMOR(), ...ALL_WEAPONS()])] },
  ],
  4: [
    { ...ZERO_REWARD, gold: 100 },
    { ...ZERO_REWARD, xp: 25 },
    { ...ZERO_REWARD, status: ['armor-up'] },
    { ...ZERO_REWARD, status: ['attack-up'] },
    { ...ZERO_REWARD, status: ['resistance-up'] },
    { ...ZERO_REWARD, items: [getRandom([...ALL_ARMOR(), ...ALL_WEAPONS()])] },
  ],
  5: [
    { ...ZERO_REWARD, gold: 100 },
    { ...ZERO_REWARD, xp: 25 },
    { ...ZERO_REWARD, status: ['armor-up'] },
    { ...ZERO_REWARD, status: ['attack-up'] },
    { ...ZERO_REWARD, status: ['resistance-up'] },
    { ...ZERO_REWARD, items: [getRandom([...ALL_ARMOR(), ...ALL_WEAPONS()])] },
    { ...ZERO_REWARD, items: [getRandom([...ALL_ARMOR(), ...ALL_WEAPONS()])] },
    { ...ZERO_REWARD, items: [getRandom([...ALL_ARMOR(), ...ALL_WEAPONS()])] },
  ],
}
