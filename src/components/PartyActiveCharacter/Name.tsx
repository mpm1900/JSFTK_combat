import React from 'react'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { BoxContainer } from '../../elements/box'
import { Theme } from '../../theme'

export interface NamePropsT {
  name: string
}

export const Name = (props: NamePropsT) => {
  const { name } = props
  return (
    <FlexContainer
      style={{
        width: '100%',
        height: 40,
        marginBottom: -20,
        marginTop: -20,
      }}
    >
      <FullContainer />
      <BoxContainer
        style={{ zIndex: 2 }}
        substyle={{
          background: Theme.darkBgColor,
          fontFamily: Theme.titleFont,
          fontSize: 18,
        }}
      >
        {name}
      </BoxContainer>
      <FullContainer />
    </FlexContainer>
  )
}
