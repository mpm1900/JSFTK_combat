import React from 'react'
import { ProcessedCharacterT } from '../../types'
import { FlexContainer } from '../../elements/flex'

export interface NamePropsT {
  character: ProcessedCharacterT
}

export const Name = (props: NamePropsT) => {
  const { character } = props

  return (
    <FlexContainer
      style={{
        marginTop: -3,
        marginRight: -3,
        padding: '0 4px',
        paddingLeft: 8,
        background: '#555',
        height: 20,
        lineHeight: '24px',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0px 4px 5px black',
        zIndex: 2,
      }}
    >
      <span
        style={{
          fontWeight: 'bolder',
          textShadow: '0px 0px 2px black',
        }}
      >
        {character.name}
      </span>
    </FlexContainer>
  )
}
