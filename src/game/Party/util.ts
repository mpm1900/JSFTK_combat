import { tParty, tProcessedParty } from './type'
import {
  checkForProcessedCharacter,
  processCharacter,
  getRewardsFromCharacter,
  addExperience,
  addMultipleStatus,
} from '../Character/util'
import { tCharacter, tProcessedCharacter } from '../Character/type'
import { v4 } from 'uuid'
import { getRandom } from '../../util'
import { tEncounterReward } from '../Encounter/type'
import { tArmor } from '../Armor/type'
import { tWeapon } from '../Weapon/type'
import { tConsumable } from '../Consumable/type'
import { FLOOR_CONFIGS_BY_INDEX } from '../Encounter/floors'

export const isParty = (obj: any): boolean =>
  obj !== undefined && obj.isParty !== undefined

export const checkForProcessedParty = (party: tParty) => {
  if ((party as tProcessedParty).processed) {
    throw new Error('No Processed Parties Allowed')
  }
  party.characters.forEach((character) => {
    checkForProcessedCharacter(character)
  })
}

export const findCharacterInParty = <
  T extends tParty = tParty,
  R extends tCharacter = tCharacter
>(
  party: T,
  id: string,
): R | undefined => {
  return (party.characters as R[]).find((c) => c.id === id)
}

export const getOtherCharacters = (
  party: tParty,
  characterId: string,
): tCharacter[] => party.characters.filter((c) => c.id !== characterId)

export const processParty = (party: tParty): tProcessedParty => {
  checkForProcessedParty(party)
  return {
    ...party,
    processed: true,
    characters: party.characters.map((c) => ({
      ...processCharacter(c),
      partyId: party.id,
    })),
  }
}

export const updateCharacter = (
  party: tParty,
  characterId: string,
  updater: (character: tCharacter) => tCharacter,
): tParty => {
  checkForProcessedParty(party)
  return {
    ...party,
    characters: party.characters.map((c) =>
      c.id === characterId ? updater(c) : c,
    ),
  }
}

export const makeParty = (level: number, floor: number): tParty => {
  const floorConfig = FLOOR_CONFIGS_BY_INDEX()[floor]
  const length = Object.keys(floorConfig.enemies).length
  level = level > length - 1 ? length - 1 : level

  return {
    isParty: true,
    id: v4(),
    gold: 0,
    items: [],
    characters: getRandom(floorConfig.enemies[level] || []),
  }
}

export const makeBossParty = (floor: number): tParty => {
  const config = FLOOR_CONFIGS_BY_INDEX()[floor]
  return {
    isParty: true,
    id: v4(),
    gold: 0,
    items: [],
    characters: [getRandom(config.bosses)],
  }
}

export const getRolledRewards = (
  party: tProcessedParty,
  checkedCharacter: tProcessedCharacter,
): tEncounterReward[] => {
  return party.characters.reduce((r, character) => {
    return [...r, ...getRewardsFromCharacter(character, checkedCharacter)]
  }, [] as tEncounterReward[])
}

export const commitRewards = (
  party: tParty,
  rewards: tEncounterReward,
): tParty => {
  checkForProcessedParty(party)
  const goldMultiplier =
    1 +
    processParty(party).characters.reduce(
      (r, c) => (r > c.stats.goldModifier ? r : c.stats.goldModifier),
      0,
    ) /
      100
  return {
    ...party,
    gold: party.gold + Math.floor(rewards.gold * goldMultiplier),
    items: [
      ...party.items,
      ...(rewards.items.filter((i) => i.itemType !== 'consumable') as (
        | tArmor
        | tWeapon
      )[]),
    ],
    characters: party.characters.map((c) =>
      addMultipleStatus(
        addExperience(
          {
            ...c,
            consumables: [
              ...c.consumables,
              ...(rewards.items.filter(
                (i) => i.itemType === 'consumable',
              ) as tConsumable[]),
            ],
          },
          rewards.xp,
        ),
        rewards.status,
      ),
    ),
  }
}
