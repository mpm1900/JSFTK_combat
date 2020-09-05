import React from 'react'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { BoxContainer } from '../../elements/box'

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
      <BoxContainer style={{ zIndex: 2 }} substyle={{ background: '#444' }}>
        {name}
      </BoxContainer>
      <FullContainer />
    </FlexContainer>
  )
}
