import React from 'react'
import { ProcessedCharacterT } from '../../types'
import { ItemPropsT } from './Items'
import { FlexContainer } from '../../elements/flex'
import { BoxContainer } from '../../elements/box'
import { CharacterImage } from '../CharacterImage'
const SIZE = 100
export interface ImagePropsT {
  character: ProcessedCharacterT
}

export const Image = (props: ItemPropsT) => {
  const { character } = props
  return (
    <FlexContainer $full style={{ justifyContent: 'flex-end' }}>
      <div>
        <BoxContainer
          style={{ marginRight: 30 }}
          substyle={{ padding: 0, height: SIZE, width: SIZE }}
        >
          <CharacterImage character={character} size={100} />
        </BoxContainer>
      </div>
    </FlexContainer>
  )
}
