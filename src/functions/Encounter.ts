import {
  EncounterT,
  EncounterTypeT,
  EncounterRewardT,
  CombatEncounterT,
  EncounterChoiceT,
} from '../types/Encounter'
import { getRandom, noneg } from '../util'
import { makeEntity } from './Entity'
import { makeParty } from './Party'

const ZERO_REWARD: EncounterRewardT = {
  gold: 0,
  xp: 0,
  items: [],
  consumables: [],
  status: [],
}

export const makeRandomEncounter = (depth: number) => {
  const encounterType: EncounterTypeT = getRandom([
    'combat',
    'combat',
    'combat',
    'combat',
    'combat',
    'combat',
    'shop',
    'shrine',
  ])
  let encounter: EncounterT = {
    ...makeEntity(`Encounter ${depth}`),
    type: encounterType,
    reward: ZERO_REWARD,
  }

  if (encounter.type === 'combat') {
    encounter = {
      ...encounter,
      party: makeParty(noneg(depth - 1)),
    } as CombatEncounterT
  }

  return encounter
}

export const makeEncounterList = (depth: number): EncounterChoiceT[] => {
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
