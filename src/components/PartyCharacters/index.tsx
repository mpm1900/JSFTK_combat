import React from 'react'
import { ProcessedPartyT, ProcessedCharacterT } from '../../types'
import { FlexContainer } from '../../elements/flex'
import { PartyCharacter } from '../PartyCharacter'

export interface PartyCharactersProps {
  party: ProcessedPartyT
  activeCharacter: ProcessedCharacterT
  onCharacterClick: (character: ProcessedCharacterT) => void
}
export const PartyCharacters = (props: PartyCharactersProps) => {
  const { party, activeCharacter, onCharacterClick } = props

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
            <PartyCharacter
              hoverable={true}
              activeCharacter={activeCharacter}
              character={c}
              onClick={() => onCharacterClick(c)}
            />
          </div>
        ))}
      </FlexContainer>
    </FlexContainer>
  )
}
