import { v4 } from 'uuid'
import {
  tEncounter,
  tEncounterType,
  tCombatEncounter,
  tEncounterChoice,
  tShopEncounter,
  tShrineEncounter,
  tBossEncounter,
  tFloor,
} from './type'
import { getRandom, noneg } from '../../util'
import { makeParty, makeBossParty } from '../Party/util'
import { tArmor } from '../Armor/type'
import { tWeapon } from '../Weapon/type'
import { GODSBEARD } from '../Consumable/objects/godsbeard'
import { tConsumable } from '../Consumable/type'
import { tBaseStats } from '../Stats/type'
import { POSSIBLE_SHINE_REWARDS, ZERO_REWARD } from './constants'
import { FLOOR_CONFIGS_BY_INDEX } from './floors'

export const makeEncounterType = (
  depth: number,
  max: number,
): tEncounterType => {
  // return 'shop'
  if (depth === max - 2) {
    return 'boss'
  }
  if (depth === max - 1) {
    return 'reward'
  }
  if (depth === 0) {
    return 'combat'
  }
  return getRandom([
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
}

export const makeRandomEncounter = (
  depth: number,
  max: number,
  floor: number,
) => {
  let encounterType = makeEncounterType(depth, max)
  const floorConfig = FLOOR_CONFIGS_BY_INDEX[floor]
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
      party: makeParty(noneg(depth - 1), floor),
    } as tCombatEncounter
  }
  if (encounter.type === 'boss') {
    encounter = {
      ...encounter,
      boss: true,
      party: makeBossParty(floor),
    } as tBossEncounter
  }
  if (encounter.type === 'reward') {
    encounter = {
      ...encounter,
    }
  }
  if (encounter.type === 'shop') {
    const items = [GODSBEARD(), ...floorConfig.items]
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

export const makeEncounterList = (
  depth: number,
  floor: number,
): tEncounterChoice[] => {
  return Array(depth)
    .fill(undefined)
    .map((_, index) => {
      const id = v4()
      return {
        id,
        depth: index,
        value: undefined,
        left: {
          ...makeRandomEncounter(index, depth, floor),
          choiceId: id,
        },
        right: {
          ...makeRandomEncounter(index, depth, floor),
          choiceId: id,
        },
      }
    })
}

export const getItemCost = (item: tArmor | tWeapon | tConsumable): number => {
  return item.goldValue * 3
}

export const makeFloor = (depth: number, encounterCount: number): tFloor => {
  return {
    id: v4(),
    encounters: makeEncounterList(encounterCount, depth),
    depth,
    image: '',
  }
}
