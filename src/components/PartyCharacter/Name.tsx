import React from 'react'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { tProcessedCharacter } from '../../game/Character/type'
import { Theme } from '../../theme'

export interface NamePropsT {
  character: tProcessedCharacter
}

export const Name = (props: NamePropsT) => {
  const { character } = props

  return (
    <FlexContainer
      style={{
        marginTop: -3,
        marginRight: -3,
        marginLeft: -3,
        padding: '0 4px 0 4px',
        paddingLeft: 46,
        background: Theme.lightBgColor,
        height: 20,
        lineHeight: '24px',
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0px 4px 5px black',
        zIndex: 2,
      }}
    >
      <FullContainer
        style={{
          fontFamily: Theme.titleFont,
          textShadow: '0px 0px 2px black',
          flex: 1,
          fontSize: 18,
          lineHeight: '20px',
        }}
      >
        {character.name}
      </FullContainer>
      <div
        style={{
          fontSize: 12,
          color: 'rgba(255,255,255,0.3)',
        }}
      >
        {character.class}
      </div>
    </FlexContainer>
  )
}
