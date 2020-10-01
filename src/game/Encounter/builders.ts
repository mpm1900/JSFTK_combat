import { v4 } from 'uuid'
import { HexT } from '../../grid/types'
import { CENTER_HEX, getDepth, isValueEqual, MIN_HEX } from '../../grid/util'
import { getRandom, noneg } from '../../util'
import { makeRandom } from '../../util/makeRandom'
import { getRewardsFromCharacter } from '../Character/util'
import { BEAST_DRUG } from '../Consumable/objects/beast_drug'
import { CELESTIAL_LOTUS } from '../Consumable/objects/celestial_lotus'
import { CURE_POTION } from '../Consumable/objects/curing_potion'
import { FIREBOMB } from '../Consumable/objects/firebomb'
import { GODSBEARD } from '../Consumable/objects/godsbeard'
import { POISON_KNIFE } from '../Consumable/objects/poison_knife'
import { consolidateRewards } from '../Other/util'
import { makeBossParty, makeParty } from '../Party/util'
import { tBaseStats } from '../Stats/type'
import { POSSIBLE_SHINE_REWARDS } from './constants'
import { FLOOR_CONFIGS_BY_ID, FLOOR_SIZE } from './floors'
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
  const isStart = isValueEqual(hex, MIN_HEX(FLOOR_SIZE))
  const isSide = hex.q === 0 || hex.q - 1 === depth
  const isCenter = isValueEqual(hex, CENTER_HEX(FLOOR_SIZE))
  const isEnd = depth === FLOOR_SIZE - 1
  const roll = makeRandom(100, 1)
  if (isStart) return 'smith'
  if (isEnd) return 'boss'
  if (isCenter) return 'reward'
  if (isShop) return 'shop'
  if (isSide) return 'combat'
  if (roll >= 96) return 'reward'
  if (roll >= 80) return 'shrine'
  return 'combat'
}

export const buildRandomEncounter = (
  floorId: string,
  hex: HexT,
  isShop: boolean,
): tEncounter | undefined => {
  // const isStart = isValueEqual(hex, MIN_HEX(FLOOR_SIZE))
  const depth = getDepth(hex, FLOOR_SIZE)
  const type = buildRandomEncounterType(hex, depth, isShop)
  const isSide = hex.q === 0 || hex.q - 1 === depth
  let encounter = makeEncounter(type)
  if (type === 'combat') {
    encounter = {
      ...buildCombatEncounter(encounter, depth, floorId, hex),
      blocking:
        (!isSide || depth !== FLOOR_SIZE - 2) &&
        depth !== 0 &&
        makeRandom(100) > 90,
    }
  }
  if (type === 'boss') {
    encounter = buildBossEncounter(encounter, floorId, hex)
  }
  if (type === 'reward') {
    encounter = buildRewardEncounter(encounter, floorId)
  }
  if (encounter.type === 'shop') {
    encounter = buildShopEncounter(encounter, floorId)
  }
  if (encounter.type === 'shrine') {
    encounter = buildShrineEncounter(encounter)
  }

  return encounter
}

export const buildCombatEncounter = (
  encounter: tEncounter,
  depth: number,
  floorId: string,
  hex: HexT,
): tCombatEncounter => {
  const isSide = hex.q === 0 || hex.q - 1 === depth
  const isElite = makeRandom(100) > 92 && !isSide
  return {
    ...encounter,
    isElite,
    party: makeParty(noneg(depth), floorId, isElite, hex.q),
  }
}

export const buildBossEncounter = (
  encounter: tEncounter,
  floorId: string,
  hex: HexT,
): tBossEncounter => {
  return {
    ...encounter,
    boss: true,
    isElite: false,
    party: makeBossParty(floorId, hex.q),
  }
}

export const buildRewardEncounter = (
  encounter: tEncounter,
  floorId: string,
): tRewardEncounter => {
  const config = FLOOR_CONFIGS_BY_ID()[floorId]
  return {
    ...encounter,
    isMimic: makeRandom(10) > 6,
    // chunk this out by floor
    reward: consolidateRewards(getRewardsFromCharacter(config.mimic())),
    isOpened: false,
    isElite: true,
    party: {
      ...makeParty(0, floorId, false, 0),
      characters: [config.mimic()],
    },
  }
}

export const buildShopEncounter = (
  encounter: tEncounter,
  floorId: string,
): tShopEncounter => {
  const config = FLOOR_CONFIGS_BY_ID()[floorId]
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
    done: false,
    optional: makeRandom(100) > 50,
  }
}
