import { tCombatReward } from './types'

export const consolidateRewards = (rewards: tCombatReward[]): tCombatReward => {
  return rewards.reduce(
    (res, reward) => {
      return {
        gold: res.gold + reward.gold,
        xp: res.xp + reward.xp,
        items: [...res.items, ...reward.items],
        consumables: [...res.consumables, ...reward.consumables],
      }
    },
    {
      gold: 0,
      xp: 0,
      items: [],
      consumables: [],
    },
  )
}
