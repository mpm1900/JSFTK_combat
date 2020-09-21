import { v4 } from 'uuid'
import {
  tEncounter,
  tEncounterType,
  tCombatEncounter,
  tShopEncounter,
  tShrineEncounter,
  tBossEncounter,
  tFloor2,
  tRewardEncounter,
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
import { CELESTIAL_LOTUS } from '../Consumable/objects/celestial_lotus'
import { CURE_POTION } from '../Consumable/objects/curing_potion'
import { FIREBOMB } from '../Consumable/objects/firebomb'
import { POISON_KNIFE } from '../Consumable/objects/poison_knife'
import { BEAST_DRUG } from '../Consumable/objects/beast_drug'
import { makeEncounterArray } from '../../grid/util'
import { makeRandom } from '../../util/makeRandom'
import { makeEnemyReward } from '../Character/enemies/_builder'
import { getRandomItem } from '../Item/util'

export const makeEncounterType = (
  depth: number,
  max: number,
  isShop: boolean = false,
  canBeReward: boolean = true,
): tEncounterType => {
  return 'shop'
  if (isShop) {
    return 'shop'
  }
  if (depth === max - 1) {
    return 'boss'
  }
  if (depth === 0) {
    return 'combat'
  }
  if (canBeReward) {
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
      'combat',
      'combat',
      'combat',
      'combat',
      'combat',
      'combat',
      'combat',
      'combat',
      'combat',
      'combat',
      'reward',
      'shrine',
    ])
  } else {
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
      'combat',
      'combat',
      'combat',
      'combat',
      'combat',
      'combat',
      'combat',
      'combat',
      'combat',
      'combat',
      'combat',
    ])
  }
}

export const makeRandomEncounter = (
  depth: number,
  altIndex: number,
  max: number,
  floor: number,
  isShop: boolean,
  canBeReward: boolean,
) => {
  let encounterType = makeEncounterType(depth, max, isShop, canBeReward)
  const floorConfig = FLOOR_CONFIGS_BY_INDEX()[floor]
  let encounter: tEncounter = {
    id: v4(),
    choiceId: '',
    name: `Encounter ${depth}`,
    type: encounterType,
    reward: ZERO_REWARD,
    completed: false,
  }

  if (encounter.type === 'combat') {
    encounter = {
      ...encounter,
      party: makeParty(noneg(depth), floor),
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
      isMimic: makeRandom(10) > 6,
      reward: makeEnemyReward(100, makeRandom(25), [
        getRandomItem(2, 2),
        getRandomItem(2, 2),
      ]),
      isOpened: false,
      party: {
        ...makeParty(depth, floor),
        characters: [floorConfig.mimic()],
      },
    } as tRewardEncounter
  }
  if (encounter.type === 'shop') {
    const items = [
      GODSBEARD(),
      CELESTIAL_LOTUS(),
      CURE_POTION(),
      FIREBOMB(),
      POISON_KNIFE(),
      BEAST_DRUG(),
      ...floorConfig.items,
    ]
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

export const getItemCost = (item: tArmor | tWeapon | tConsumable): number => {
  return item.goldValue * 3
}

export const makeFloor2 = (depth: number, size: number): tFloor2 => {
  console.log('makeFloor', depth)
  let name = ''
  if (depth === 0) {
    name = 'The Forgotten Woods'
  }
  if (depth === 1) {
    name = 'Tomb of the Formless One (in-progress)'
  }
  if (depth === 2) {
    name = 'Realm of the Ancients (comming soon)'
  }
  return {
    id: v4(),
    name,
    depth,
    size: size,
    encounters: makeEncounterArray(size, depth),
  }
}
