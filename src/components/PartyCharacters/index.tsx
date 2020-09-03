import React from 'react'
import { ProcessedPartyT, ProcessedCharacterT } from '../../types'
import { FlexContainer } from '../../elements/flex'
import { PartyCharacter } from '../PartyCharacter'

export interface PartyCharactersProps {
  party: ProcessedPartyT
  activeCharacter: ProcessedCharacterT
}
export const PartyCharacters = (props: PartyCharactersProps) => {
  const { party, activeCharacter } = props

  return (
    <FlexContainer $direction='column'>
      <FlexContainer
        style={{
          justifyContent: 'space-around',
          alignItems: 'flex-end',
        }}
      >
        {party.characters.map((c) => (
          <div key={c.id}>
            <PartyCharacter activeCharacter={activeCharacter} character={c} />
          </div>
        ))}
      </FlexContainer>
    </FlexContainer>
  )
}
