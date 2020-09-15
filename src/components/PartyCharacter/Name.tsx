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
        paddingLeft: 52,
        paddingRight: 8,
        background: Theme.otherGrey2,
        height: 24,
        alignItems: 'center',
        lineHeight: '24px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0px 4px 5px black',
        zIndex: 2,
      }}
    >
      <FullContainer
        style={{
          fontFamily: Theme.titleFont,
          textShadow: '1px 1px 3px black',
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
