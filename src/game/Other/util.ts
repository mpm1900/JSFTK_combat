import { tEncounterReward } from '../Encounter/type'
import { ZERO_REWARD } from '../Encounter/constants'

export const consolidateRewards = (
  rewards: tEncounterReward[],
): tEncounterReward => {
  return rewards.reduce((res, reward) => {
    return {
      gold: res.gold + reward.gold,
      xp: res.xp + reward.xp,
      items: [...res.items, ...reward.items],
      status: [...res.status, ...reward.status],
      immunities: [...res.immunities, ...reward.immunities],
    }
  }, ZERO_REWARD)
}
