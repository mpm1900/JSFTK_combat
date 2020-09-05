import React, { useMemo, useContext, useState } from 'react'
import {
  PartyT,
  ProcessedPartyT,
  CharacterT,
  ProcessedCharacterT,
  WeaponT,
  ArmorT,
} from '../../types'
import { usePartyActions, useParty } from '../../state/party'
import {
  findCharacterInParty,
  processParty,
  makeParty,
  processCharacter,
  makeCharacter,
  equipArmor,
  equipWeapon,
} from '../../functions'

export interface PartyContextT {
  party: ProcessedPartyT
  rawParty: PartyT
  activeCharacter: ProcessedCharacterT
  updateParty: (party: PartyT) => void
  upsertCharacter: (character: CharacterT) => void
  deleteCharacter: (characterId: string) => void
  findCharacter: (characterId: string) => ProcessedCharacterT | undefined
  findRawCharacter: (characterId: string) => CharacterT | undefined
  setActiveCharacter: (character: ProcessedCharacterT) => void
  equipItem: (characterId: string, item: WeaponT | ArmorT) => void
}
const defaultContextValue: PartyContextT = {
  rawParty: makeParty(),
  party: processParty(makeParty()),
  activeCharacter: processCharacter(makeCharacter('blacksmith')),
  updateParty: (party) => {},
  upsertCharacter: (character) => {},
  deleteCharacter: (characterId) => {},
  findCharacter: (characterId) => undefined,
  findRawCharacter: (characterId) => undefined,
  setActiveCharacter: (character) => {},
  equipItem: (characterId, item) => {},
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
  const party = useMemo(() => processParty(rawParty), [rawParty])
  const [activeCharacterId, setActiveCharacterId] = useState<string>(
    party.characters[0].id,
  )
  const activeCharacter = useMemo(() => {
    return party.characters.find(
      (c) => c.id === activeCharacterId,
    ) as ProcessedCharacterT
  }, [activeCharacterId, party.characters])
  const setActiveCharacter = (character: ProcessedCharacterT) =>
    setActiveCharacterId(character.id)
  const updateParty = (party: PartyT) => {
    actions.updateParty(party)
  }
  const upsertCharacter = (character: CharacterT) => {
    if (!character) return
    if ((character as ProcessedCharacterT).processed) {
      throw new Error('No processed Characters Allowed')
    }
    actions.upsertCharacter(character)
  }
  const deleteCharacter = (characterId: string) => {
    actions.deleteCharacter(characterId)
  }
  const findCharacter = (characterId: string) => {
    return findCharacterInParty<ProcessedPartyT, ProcessedCharacterT>(
      party,
      characterId,
    )
  }
  const findRawCharacter = (characterId: string) => {
    return findCharacterInParty(rawParty, characterId)
  }

  const equipItem = (characterId: string, item: WeaponT | ArmorT) => {
    const character = findRawCharacter(activeCharacter.id)
    if (!character) return
    if (item.itemType === 'armor') {
      const armor = item as ArmorT
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
      const weapon = item as WeaponT
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
      }}
    >
      {children}
    </PartyContext.Provider>
  )
}

export const usePartyContext = () => useContext(PartyContext)
