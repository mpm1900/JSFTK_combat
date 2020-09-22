import React from 'react'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { Button } from '../../elements/button'
import { FlexContainer } from '../../elements/flex'
import { HeadingSm, Text } from '../../elements/typography'
import { tEncounter, tShrineEncounter } from '../../game/Encounter/type'
import { Theme } from '../../theme'

export interface SmithPropsT {
  currentEncounter: tEncounter
}

export const Smith = (props: SmithPropsT) => {
  const { completeCurrent } = useGameStateContext()
  return (
    <FlexContainer $direction='column' style={{ paddingTop: 24 }}>
      <HeadingSm
        style={{
          textAlign: 'center',
        }}
      >
        Armor Workshop
      </HeadingSm>
      <Text
        style={{
          marginBottom: 24,
          padding: 8,
        }}
      >
        Here you can upgrade your party's armor, for a cost.
      </Text>
      <FlexContainer style={{ justifyContent: 'center' }}>
        <Button onClick={() => completeCurrent()}>Leave Workshop</Button>
      </FlexContainer>
    </FlexContainer>
  )
}
