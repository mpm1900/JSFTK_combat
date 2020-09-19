import React, { useMemo, useContext, useState } from 'react'
import { usePartyActions, useParty } from '../../state/party'
import { tProcessedParty, tParty } from '../../game/Party/type'
import { tProcessedCharacter, tCharacter } from '../../game/Character/type'
import {
  processParty,
  makeParty,
  findCharacterInParty,
} from '../../game/Party/util'
import {
  checkForProcessedCharacter,
  processCharacter,
  makeCharacter,
  equipArmor,
  equipWeapon,
  unequipArmor,
} from '../../game/Character/util'
import { tWeapon } from '../../game/Weapon/type'
import { tArmor } from '../../game/Armor/type'
import { useGameStateContext } from '../GameStateContext'
import { tConsumable } from '../../game/Consumable/type'
import { FISTS } from '../../game/Weapon/fists'

export interface PartyContextT {
  party: tProcessedParty
  rawParty: tParty
  activeCharacter: tProcessedCharacter
  updateParty: (party: tParty) => void
  upsertCharacter: (character: tCharacter) => void
  deleteCharacter: (characterId: string) => void
  findCharacter: (characterId: string) => tProcessedCharacter | undefined
  findRawCharacter: (characterId: string) => tCharacter | undefined
  setActiveCharacter: (character: tProcessedCharacter) => void
  equipItem: (characterId: string, item: tWeapon | tArmor) => void
  unequipItem: (characterId: string, item: tWeapon | tArmor) => void
  purchaseItem: (item: tArmor | tWeapon | tConsumable, cost: number) => void
  sellItem: (itemId: string) => void
  refreshParty: () => void
}
const defaultContextValue: PartyContextT = {
  rawParty: makeParty(0, 0),
  party: processParty(makeParty(0, 0)),
  activeCharacter: processCharacter(makeCharacter('executioner')),
  updateParty: (party) => {},
  upsertCharacter: (character) => {},
  deleteCharacter: (characterId) => {},
  findCharacter: (characterId) => undefined,
  findRawCharacter: (characterId) => undefined,
  setActiveCharacter: (character) => {},
  equipItem: (characterId, item) => {},
  unequipItem: (characterId, item) => {},
  purchaseItem: (item, cost) => {},
  sellItem: (itemId) => {},
  refreshParty: () => {},
}
export const PartyContext = React.createContext<PartyContextT>(
  defaultContextValue,
)

export interface PartyContextProviderPropsT {
  children: React.ReactNode | React.ReactNode[]
}
export const PartyContextProvider = (props: PartyContextProviderPropsT) => {
  const { children } = props
  const actions = usePartyActions()
  const rawParty = useParty()
  const { currentChoice, currentEncounter, removeItem } = useGameStateContext()
  const party = useMemo(() => processParty(rawParty), [rawParty])
  const [activeCharacterId, setActiveCharacterId] = useState<string>(
    party.characters[0].id,
  )
  const activeCharacter = useMemo(() => {
    return party.characters.find(
      (c) => c.id === activeCharacterId,
    ) as tProcessedCharacter
  }, [activeCharacterId, party.characters])
  const setActiveCharacter = (character: tProcessedCharacter) =>
    setActiveCharacterId(character.id)
  const updateParty = (party: tParty) => {
    actions.updateParty(party)
  }
  const upsertCharacter = (character: tCharacter) => {
    if (!character) return
    checkForProcessedCharacter(character)
    actions.upsertCharacter(character)
  }
  const deleteCharacter = (characterId: string) => {
    actions.deleteCharacter(characterId)
  }
  const findCharacter = (characterId: string) => {
    return findCharacterInParty<tProcessedParty, tProcessedCharacter>(
      party,
      characterId,
    )
  }
  const findRawCharacter = (characterId: string) => {
    return findCharacterInParty(rawParty, characterId)
  }

  const equipItem = (characterId: string, item: tWeapon | tArmor) => {
    const character = findRawCharacter(characterId)
    if (!character) return
    if (item.itemType === 'armor') {
      const armor = item as tArmor
      if (armor.resource === 'offhand' && (character.weapon || FISTS()).twoHand)
        return
      const result = equipArmor(character, armor)
      updateParty({
        ...rawParty,
        items: [
          ...rawParty.items.filter((i) => i.id !== item.id),
          ...(result.armor ? [result.armor] : []),
        ],
        characters: rawParty.characters.map((c) =>
          c.id === result.character.id ? result.character : c,
        ),
      })
    }
    if (item.itemType === 'weapon') {
      const weapon = item as tWeapon
      if ((character.weapon || FISTS()).twoHand) {
        if (character.armor.find((a) => a.resource === 'offhand')) {
          return
        }
      }
      const result = equipWeapon(character, weapon)
      updateParty({
        ...rawParty,
        items: [
          ...rawParty.items.filter((i) => i.id !== item.id),
          ...(result.weapon ? [result.weapon] : []),
        ],
        characters: rawParty.characters.map((c) =>
          c.id === result.character.id ? result.character : c,
        ),
      })
    }
  }
  const unequipItem = (characterId: string, item: tWeapon | tArmor) => {
    const character = findRawCharacter(characterId)
    if (!character) return
    if (item.itemType === 'armor') {
      const armor = item as tArmor
      const result = unequipArmor(character, armor.resource)
      updateParty({
        ...rawParty,
        items: [
          ...rawParty.items.filter((i) => i.id !== item.id),
          ...(result.armor ? [result.armor] : []),
        ],
        characters: rawParty.characters.map((c) =>
          c.id === result.character.id ? result.character : c,
        ),
      })
    }
    if (item.itemType === 'weapon') {
      updateParty({
        ...rawParty,
        items: character.weapon
          ? [...rawParty.items, character.weapon]
          : rawParty.items,
        characters: rawParty.characters.map((c) =>
          c.id === characterId ? { ...c, weapon: undefined } : c,
        ),
      })
    }
  }
  const purchaseItem = (item: tArmor | tWeapon | tConsumable, cost: number) => {
    console.log('purchase item', item)
    if (party.gold > cost && currentChoice && currentEncounter) {
      if (item.itemType === 'armor' || item.itemType === 'weapon') {
        actions.upsertItem(item as tArmor | tWeapon)
      }
      if (item.itemType === 'consumable') {
        updateParty({
          ...rawParty,
          characters: rawParty.characters.map((c) => ({
            ...c,
            consumables: [...c.consumables, item as tConsumable],
          })),
        })
      }
      actions.setGold(party.gold - cost)
      removeItem(currentChoice.id, currentEncounter.id, item.id)
    }
  }
  const sellItem = (itemId: string) => {
    const item = rawParty.items.find((i) => i.id === itemId)
    if (item) {
      updateParty({
        ...rawParty,
        items: rawParty.items.filter((i) => i.id !== itemId),
        gold: rawParty.gold + item.goldValue,
      })
    }
  }
  const refreshParty = () => {
    updateParty({
      ...rawParty,
      characters: rawParty.characters.map((c) => ({
        ...c,
        healthOffset: 0,
        status: [],
      })),
    })
  }

  return (
    <PartyContext.Provider
      value={{
        party,
        rawParty,
        activeCharacter,
        updateParty,
        upsertCharacter,
        deleteCharacter,
        findCharacter,
        findRawCharacter,
        setActiveCharacter,
        equipItem,
        unequipItem,
        purchaseItem,
        sellItem,
        refreshParty,
      }}
    >
      {children}
    </PartyContext.Provider>
  )
}

export const usePartyContext = () => useContext(PartyContext)
