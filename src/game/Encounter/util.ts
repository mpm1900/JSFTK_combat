import { v4 } from 'uuid'
import {
  tEncounterReward,
  tEncounter,
  tEncounterType,
  tCombatEncounter,
  tEncounterChoice,
  tShopEncounter,
} from './type'
import { getRandom, noneg } from '../../util'
import { makeParty } from '../Party/util'
import { ALL_WEAPONS } from '../Weapon/constants'
import { ALL_ARMOR } from '../Armor/objects'
import { tArmor } from '../Armor/type'
import { tWeapon } from '../Weapon/type'

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
    'combat',
    'combat',
    'combat',
    'shop',
    //'shrine',
  ])
  let encounter: tEncounter = {
    id: v4(),
    choiceId: '',
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
  if (encounter.type === 'shop') {
    const items = [...ALL_WEAPONS(), ...ALL_ARMOR()]
    encounter = {
      ...encounter,
      items,
      consumables: [],
      costs: items.reduce((r, i) => {
        return {
          ...r,
          [i.id]: getItemCost(i),
        }
      }, {}),
    } as tShopEncounter
  }

  return encounter
}

export const makeEncounterList = (depth: number): tEncounterChoice[] => {
  return Array(depth)
    .fill(undefined)
    .map((_, index) => {
      const id = v4()
      return {
        id,
        depth: index,
        value: undefined,
        left: {
          ...makeRandomEncounter(index),
          choiceId: id,
        },
        right: {
          ...makeRandomEncounter(index),
          choiceId: id,
        },
      }
    })
}

export const getItemCost = (item: tArmor | tWeapon): number => {
  let cost = 0
  if (item.itemType === 'armor') cost += 40
  if (item.itemType === 'weapon') cost += 80
  switch (item.rarity) {
    case 'common':
      cost += 10
      break
    case 'uncommon':
      cost += 30
      break
    case 'rare':
      cost += 50
      break
    case 'mythic':
      cost += 70
      break
    default: {
      cost += 0
      break
    }
  }
  return cost
}
