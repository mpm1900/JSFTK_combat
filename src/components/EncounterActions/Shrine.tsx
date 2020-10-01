import React from 'react'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { Button } from '../../elements/button'
import { FlexContainer } from '../../elements/flex'
import { Text } from '../../elements/typography'
import { tShrineEncounter } from '../../game/Encounter/type'
import { Theme } from '../../theme'

export interface ShrinePropsT {}

export const Shrine = (props: ShrinePropsT) => {
  const { completeCurrent, currentEncounter } = useGameStateContext()
  const ce = currentEncounter
    ? (currentEncounter as tShrineEncounter)
    : undefined
  const showButton = ce?.optional ? true : ce?.done
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
        {showButton ? (
          <Button onClick={() => completeCurrent()}>Leave Shrine</Button>
        ) : (
          <Text>This shrine is not optional.</Text>
        )}
      </FlexContainer>
    </FlexContainer>
  )
}
