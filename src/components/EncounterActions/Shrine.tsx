import React from 'react'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { Button } from '../../elements/button'
import { FlexContainer } from '../../elements/flex'
import { tShrineEncounter } from '../../game/Encounter/type'
import { Theme } from '../../theme'

export interface ShrinePropsT {
  currentEncounter: tShrineEncounter
}

export const Shrine = (props: ShrinePropsT) => {
  const { completeCurrent } = useGameStateContext()
  return (
    <FlexContainer $direction='column' style={{ justifyContent: 'center' }}>
      <h3
        style={{
          fontFamily: Theme.titleFont,
          fontWeight: 'normal',
          textAlign: 'center',
        }}
      >
        You've discoved a secret shrine.
      </h3>
      <FlexContainer style={{ justifyContent: 'center' }}>
        <Button onClick={() => completeCurrent()}>Leave Shrine</Button>
      </FlexContainer>
    </FlexContainer>
  )
}
