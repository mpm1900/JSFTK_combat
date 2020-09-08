import { v4 } from 'uuid'
import {
  tEncounterReward,
  tEncounter,
  tEncounterType,
  tCombatEncounter,
  tEncounterChoice,
} from './type'
import { getRandom, noneg } from '../../util'
import { makeParty } from '../Party/util'

const ZERO_REWARD: tEncounterReward = {
  gold: 0,
  xp: 0,
  items: [],
  consumables: [],
  status: [],
}

export const makeRandomEncounter = (depth: number) => {
  const encounterType: tEncounterType = getRandom([
    'combat',
    'combat',
    'combat',
    'combat',
    'combat',
    'combat',
    'shop',
    'shrine',
  ])
  let encounter: tEncounter = {
    id: v4(),
    name: `Encounter ${depth}`,
    type: encounterType,
    reward: ZERO_REWARD,
  }

  if (encounter.type === 'combat') {
    encounter = {
      ...encounter,
      party: makeParty(noneg(depth - 1)),
    } as tCombatEncounter
  }

  return encounter
}

export const makeEncounterList = (depth: number): tEncounterChoice[] => {
  return Array(depth)
    .fill(undefined)
    .map((_, index) => {
      return {
        value: undefined,
        left: makeRandomEncounter(index),
        right: makeRandomEncounter(index),
      }
    })
}
