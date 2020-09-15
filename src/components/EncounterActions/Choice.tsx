import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { tEncounterChoice } from '../../game/Encounter/type'
import { getChoiceText } from '../../game/Encounter/constants'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { Button } from '../../elements/button'
import { Theme } from '../../theme'

export interface ChoicePropsT {
  currentChoice: tEncounterChoice
}

export const Choice = (props: ChoicePropsT) => {
  const { currentChoice } = props
  const {
    level,
    previousChoice,
    encounters,
    chooseCurrent,
  } = useGameStateContext()
  return (
    <FlexContainer $direction='column' style={{ paddingTop: 24 }}>
      <h3
        style={{
          margin: '0 0 16px 0',
          color: 'white',
          textAlign: 'center',
          fontWeight: 'normal',
          fontFamily: Theme.titleFont,
        }}
      >
        You have a choice.
      </h3>
      <span
        style={{
          color: 'rgba(255,255,255,0.7)',
          marginBottom: 24,
          padding: 8,
        }}
      >
        {getChoiceText(currentChoice, previousChoice)}
      </span>
      {encounters.length - 1 !== level && (
        <FlexContainer style={{ justifyContent: 'center' }}>
          <Button onClick={() => chooseCurrent('left')}>Go Left</Button>
          <Button onClick={() => chooseCurrent('right')}>Go Right</Button>
        </FlexContainer>
      )}
      {encounters.length - 1 === level && (
        <FlexContainer style={{ justifyContent: 'center' }}>
          <Button onClick={() => chooseCurrent('right')}>Proceed</Button>
        </FlexContainer>
      )}
    </FlexContainer>
  )
}
