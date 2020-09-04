import React from 'react'
import { ProcessedCharacterT, CharacterClassT } from '../../types'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { BoxContainer } from '../../elements/box'
import { usePartyContext } from '../../contexts/PartyContext'
import { makeCharacter } from '../../functions'
import { WeaponPreview } from '../WeaponPreview'

export interface PartyActiveCharacterPropsT {
  character: ProcessedCharacterT
}

export const PartyActiveCharacter = (props: PartyActiveCharacterPropsT) => {
  const { character } = props
  const { upsertCharacter } = usePartyContext()
  const { weapon } = character
  console.log(character)
  return (
    <FlexContainer $full>
      <FullContainer />
      <FlexContainer $direction='column'>
        <FullContainer />
        <BoxContainer>
          <FlexContainer>
            <FlexContainer $direction='column'>
              {character.name}
              <select
                value={character.class}
                onChange={(e) => {
                  upsertCharacter({
                    ...makeCharacter(e.target.value as CharacterClassT),
                    id: character.id,
                    name: character.name,
                  })
                }}
              >
                <option value='blacksmith'>blacksmith</option>
                <option value='hunter'>hunter</option>
                <option value='scholar'>scholar</option>
                <option value='bard'>bard</option>
              </select>
            </FlexContainer>

            <WeaponPreview weapon={weapon} />
          </FlexContainer>
        </BoxContainer>
        <FullContainer />
      </FlexContainer>
      <FullContainer />
    </FlexContainer>
  )
}
