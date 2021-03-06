import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { Theme } from '../../theme'

export interface AppHeaderPropsT {
  children?: JSX.Element
  left?: JSX.Element
  right?: JSX.Element
}

export const AppHeader = (props: AppHeaderPropsT) => {
  const { children, left, right } = props

  return (
    <FlexContainer $direction='column'>
      <FlexContainer
        $center
        style={{
          background: Theme.darkBgColorSolid,
          height: 52,
          borderBottom: '2px solid rgba(255,255,255,0.3)',
          boxShadow: '1px 1px 1px black',
        }}
      >
        <FlexContainer $full>{left}</FlexContainer>
        <FlexContainer $full>{children}</FlexContainer>
        <FlexContainer $full>{right}</FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}
