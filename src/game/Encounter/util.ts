import { v4 } from 'uuid'
import {
  tEncounter,
  tEncounterType,
  tCombatEncounter,
  tEncounterChoice,
  tShopEncounter,
  tShrineEncounter,
  tBossEncounter,
} from './type'
import { getRandom, noneg } from '../../util'
import { makeParty, makeBossParty } from '../Party/util'
import { ALL_WEAPONS } from '../Weapon/constants'
import { ALL_ARMOR } from '../Armor/objects'
import { tArmor } from '../Armor/type'
import { tWeapon } from '../Weapon/type'
import { GODSBEARD } from '../Consumable/objects/godsbeard'
import { tConsumable } from '../Consumable/type'
import { tBaseStats } from '../Stats/type'
import { POSSIBLE_SHINE_REWARDS, ZERO_REWARD } from './constants'

export const makeRandomEncounter = (depth: number) => {
  const MAX_DEPTH = 10
  let encounterType: tEncounterType =
    depth === 0
      ? 'combat'
      : depth === 10
      ? 'boss'
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
  encounterType = 'shop'
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
  if (encounter.type === 'boss') {
    encounter = {
      ...encounter,
      boss: true,
      party: makeBossParty(),
    } as tBossEncounter
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
    const rewards = getRandom(POSSIBLE_SHINE_REWARDS())
    encounter = {
      ...encounter,
      stat,
      offset: 0,
      rolls: rewards.length,
      results: rewards,
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
  return item.goldValue * 3
}
