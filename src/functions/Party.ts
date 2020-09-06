import {
  CharacterT,
  PartyT,
  ProcessedPartyT,
  EntityT,
  ProcessedCharacterT,
} from '../types'
import {
  checkForProcessedCharacter,
  processCharacter,
  makeEnemy,
  getRewardsFromCharacter,
} from './Character'
import { makeEntity } from './Entity'
import { TIMBERWOLF } from '../objects/enemies/timberwolf'
import { VALE_IMP } from '../objects/enemies/vale_imp'
import { BEASTMAN } from '../objects/enemies/beastman'
import { getRandom } from '../util'
import { ALL_ENEMY_PARTY_COMBOS } from '../objects/Party'
import { CombatRewardT } from '../types/CombatReward'

export const isParty = (e: EntityT) => e && (e as PartyT).isParty

export const checkForProcessedParty = (party: PartyT) => {
  if ((party as ProcessedPartyT).processed) {
    throw new Error('No Processed Parties Allowed')
  }
  party.characters.forEach((character) => {
    checkForProcessedCharacter(character)
  })
}

export const makeParty = (characterCount: number = 0): PartyT => {
  return {
    ...makeEntity(),
    isParty: true,
    items: [],
    gold: 0,
    characters: getRandom(ALL_ENEMY_PARTY_COMBOS),
  }
}

export const findCharacterInParty = <
  T extends PartyT = PartyT,
  R extends CharacterT = CharacterT
>(
  party: T,
  id: string,
): R | undefined => {
  return (party.characters as R[]).find((c) => c.id === id)
}

export const updateCharacter = (
  party: PartyT,
  characterId: string,
  updater: (character: CharacterT) => CharacterT,
): PartyT => {
  checkForProcessedParty(party)
  return {
    ...party,
    characters: party.characters.map((c) =>
      c.id === characterId ? updater(c) : c,
    ),
  }
}

export const processParty = (party: PartyT): ProcessedPartyT => {
  return {
    ...party,
    processed: true,
    characters: party.characters.map((c) => ({
      ...processCharacter(c),
      partyId: party.id,
    })),
  }
}

export const getRolledRewards = (
  party: ProcessedPartyT,
  checkedCharacter: ProcessedCharacterT,
): CombatRewardT[] => {
  return party.characters.reduce((r, character) => {
    return [...r, ...getRewardsFromCharacter(character, checkedCharacter)]
  }, [] as CombatRewardT[])
}

export const commitRewards = (
  party: PartyT,
  rewards: CombatRewardT,
): PartyT => {
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
    items: [...party.items, ...rewards.items],
    characters: party.characters.map((c) => ({
      ...c,
      consumables: [...c.consumables, ...rewards.consumables],
      xp: c.xp + rewards.xp,
    })),
  }
}
