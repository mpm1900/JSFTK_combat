import React, { useMemo, useContext } from 'react'
import {
  PartyT,
  ProcessedPartyT,
  CharacterT,
  ProcessedCharacterT,
} from '../../types'
import { usePartyActions, useParty } from '../../state/party'
import { findCharacterInParty, processParty, makeParty } from '../../functions'

export interface PartyContextT {
  party: ProcessedPartyT
  rawParty: PartyT
  updateParty: (party: PartyT) => void
  upsertCharacter: (character: CharacterT) => void
  deleteCharacter: (characterId: string) => void
  findCharacter: (characterId: string) => ProcessedCharacterT | undefined
  findRawCharacter: (characterId: string) => CharacterT | undefined
}
const defaultContextValue: PartyContextT = {
  rawParty: makeParty(),
  party: processParty(makeParty()),
  updateParty: (party) => {},
  upsertCharacter: (character) => {},
  deleteCharacter: (characterId) => {},
  findCharacter: (characterId) => undefined,
  findRawCharacter: (characterId) => undefined,
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

  return (
    <PartyContext.Provider
      value={{
        party,
        rawParty,
        updateParty,
        upsertCharacter,
        deleteCharacter,
        findCharacter,
        findRawCharacter,
      }}
    >
      {children}
    </PartyContext.Provider>
  )
}

export const usePartyContext = () => useContext(PartyContext)
