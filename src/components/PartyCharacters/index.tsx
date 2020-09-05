import React from 'react'
import { ProcessedPartyT, ProcessedCharacterT } from '../../types'
import { FlexContainer } from '../../elements/flex'
import { PartyCharacter } from '../PartyCharacter'

export interface PartyCharactersProps {
  party: ProcessedPartyT
  activeCharacter: ProcessedCharacterT
  canEquip: boolean
  onCharacterClick: (character: ProcessedCharacterT) => void
  onConsumableClick: (
    character: ProcessedCharacterT,
    consumableIndex: number,
  ) => void
}
export const PartyCharacters = (props: PartyCharactersProps) => {
  const { party, canEquip, onCharacterClick, onConsumableClick } = props

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
              canEquip={canEquip}
              character={c}
              onClick={() => onCharacterClick(c)}
              onConsumableClick={(consumable, index) =>
                onConsumableClick(c, index)
              }
            />
          </div>
        ))}
      </FlexContainer>
    </FlexContainer>
  )
}
