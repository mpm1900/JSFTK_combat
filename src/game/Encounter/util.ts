import { v4 } from 'uuid'
import {
  tEncounterReward,
  tEncounter,
  tEncounterType,
  tCombatEncounter,
  tEncounterChoice,
  tShopEncounter,
  tShrineEncounter,
} from './type'
import { getRandom, noneg } from '../../util'
import { makeParty } from '../Party/util'
import { ALL_WEAPONS } from '../Weapon/constants'
import { ALL_ARMOR } from '../Armor/objects'
import { tArmor } from '../Armor/type'
import { tWeapon } from '../Weapon/type'
import { GODSBEARD } from '../Consumable/objects/godsbeard'
import { tConsumable } from '../Consumable/type'
import { tBaseStats } from '../Stats/type'
import { POSSIBLE_SHINE_REWARDS_BY_VALUE, ZERO_REWARD } from './constants'

export const makeRandomEncounter = (depth: number) => {
  const MAX_DEPTH = 10
  let encounterType: tEncounterType =
    depth === 0 || depth === 10
      ? 'combat'
      : getRandom([
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
          'shrine',
        ])
  // encounterType = 'shrine'
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
    const items = [GODSBEARD(), ...ALL_WEAPONS(), ...ALL_ARMOR()]
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
  if (encounter.type === 'shrine') {
    const stat: keyof tBaseStats = getRandom<keyof tBaseStats>([
      'vigor',
      'strength',
      'dexterity',
      'intelligence',
      'charisma',
      'luck',
    ])
    const rolls = getRandom([2, 3, 3, 3, 3, 4, 4, 5])
    encounter = {
      ...encounter,
      stat,
      offset: 0,
      rolls,
      results: Array(rolls)
        .fill(0)
        .map((_, i) => getRandom(POSSIBLE_SHINE_REWARDS_BY_VALUE[i])),
    } as tShrineEncounter
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

export const getItemCost = (item: tArmor | tWeapon | tConsumable): number => {
  let cost = 0
  if (item.itemType === 'armor') cost += 40
  if (item.itemType === 'weapon') cost += 80
  if (item.itemType === 'consumable') cost += 110
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
