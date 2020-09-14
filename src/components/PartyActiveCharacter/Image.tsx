import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { tProcessedCharacter } from '../../game/Character/type'
import { CharacterIcon } from '../CharacterIcon'

export interface ImagePropsT {
  character: tProcessedCharacter
}

export const Image = (props: ImagePropsT) => {
  const { character } = props
  return (
    <FlexContainer $full style={{ justifyContent: 'flex-end' }}>
      <div>
        <FlexContainer style={{ marginRight: 20, marginBottom: 10 }}>
          <CharacterIcon character={character} size={100} />
        </FlexContainer>
      </div>
    </FlexContainer>
  )
}
