import { v4 } from 'uuid'
import { HexT } from '../../grid/types'
import { CENTER_HEX, getDepth, isValueEqual, MIN_HEX } from '../../grid/util'
import { getRandom, noneg } from '../../util'
import { makeRandom } from '../../util/makeRandom'
import { makeEnemyReward } from '../Character/enemies/_builder'
import { getRewardsFromCharacter } from '../Character/util'
import { BEAST_DRUG } from '../Consumable/objects/beast_drug'
import { CELESTIAL_LOTUS } from '../Consumable/objects/celestial_lotus'
import { CURE_POTION } from '../Consumable/objects/curing_potion'
import { FIREBOMB } from '../Consumable/objects/firebomb'
import { GODSBEARD } from '../Consumable/objects/godsbeard'
import { POISON_KNIFE } from '../Consumable/objects/poison_knife'
import { getRandomItem } from '../Item/util'
import { consolidateRewards } from '../Other/util'
import { makeBossParty, makeParty } from '../Party/util'
import { tBaseStats } from '../Stats/type'
import { POSSIBLE_SHINE_REWARDS } from './constants'
import { FLOOR_CONFIGS_BY_INDEX, FLOOR_SIZE } from './floors'
import {
  tBossEncounter,
  tCombatEncounter,
  tEncounter,
  tEncounterType,
  tRewardEncounter,
  tShopEncounter,
  tShrineEncounter,
} from './type'
import { getItemCost, makeEncounter } from './util'

export const buildRandomEncounterType = (
  hex: HexT,
  depth: number,
  isShop: boolean,
): tEncounterType => {
  const isSide = hex.q === 0 || hex.q - 1 === depth
  const isCenter = isValueEqual(hex, CENTER_HEX(FLOOR_SIZE))
  const isEnd = depth === FLOOR_SIZE - 1
  const roll = makeRandom(100, 1)
  // return 'shop'
  if (isEnd) return 'boss'
  if (isCenter) return 'reward'
  if (isShop) return 'shop'
  if (isSide) return 'combat'
  if (roll >= 95) return 'reward'
  if (roll >= 78) return 'shrine'
  return 'combat'
}

export const buildRandomEncounter = (
  floor: number,
  hex: HexT,
  isShop: boolean,
): tEncounter | undefined => {
  const isStart = isValueEqual(hex, MIN_HEX(FLOOR_SIZE))
  if (isStart) return undefined

  const depth = getDepth(hex, FLOOR_SIZE)
  const type = buildRandomEncounterType(hex, depth, isShop)

  let encounter = makeEncounter(type)
  if (type === 'combat') {
    encounter = buildCombatEncounter(encounter, depth, floor, hex)
  }
  if (type === 'boss') {
    encounter = buildBossEncounter(encounter, floor, hex)
  }
  if (type === 'reward') {
    encounter = buildRewardEncounter(encounter, floor)
  }
  if (encounter.type === 'shop') {
    encounter = buildShopEncounter(encounter, floor)
  }
  if (encounter.type === 'shrine') {
    encounter = buildShrineEncounter(encounter)
  }

  return encounter
}

export const buildCombatEncounter = (
  encounter: tEncounter,
  depth: number,
  floor: number,
  hex: HexT,
): tCombatEncounter => {
  const isSide = hex.q === 0 || hex.q - 1 === depth
  const isElite = makeRandom(100) > 90 && !isSide
  return {
    ...encounter,
    isElite,
    party: makeParty(noneg(depth), floor, isElite, hex.q),
  }
}

export const buildBossEncounter = (
  encounter: tEncounter,
  floor: number,
  hex: HexT,
): tBossEncounter => {
  return {
    ...encounter,
    boss: true,
    isElite: false,
    party: makeBossParty(floor, hex.q),
  }
}

export const buildRewardEncounter = (
  encounter: tEncounter,
  floor: number,
): tRewardEncounter => {
  const config = FLOOR_CONFIGS_BY_INDEX()[floor]
  return {
    ...encounter,
    isMimic: makeRandom(10) > 6,
    // chunk this out by floor
    reward: consolidateRewards(getRewardsFromCharacter(config.mimic())),
    isOpened: false,
    isElite: true,
    party: {
      ...makeParty(0, floor, false, 0),
      characters: [config.mimic()],
    },
  }
}

export const buildShopEncounter = (
  encounter: tEncounter,
  floor: number,
): tShopEncounter => {
  const config = FLOOR_CONFIGS_BY_INDEX()[floor]
  const items = [
    GODSBEARD(),
    CELESTIAL_LOTUS(),
    CURE_POTION(),
    FIREBOMB(),
    POISON_KNIFE(),
    BEAST_DRUG(),
    ...config.items,
  ]
  return {
    ...encounter,
    items,
    costs: items.reduce((r, i) => {
      return {
        ...r,
        [i.id]: getItemCost(i),
      }
    }, {}),
  }
}

export const buildShrineEncounter = (
  encounter: tEncounter,
): tShrineEncounter => {
  const stat: keyof tBaseStats = getRandom<keyof tBaseStats>([
    'vigor',
    'strength',
    'dexterity',
    'intelligence',
    'charisma',
    'luck',
  ])
  const rewards = getRandom(POSSIBLE_SHINE_REWARDS())
  return {
    ...encounter,
    stat,
    offset: 0,
    rolls: rewards.length,
    results: rewards,
  }
}
