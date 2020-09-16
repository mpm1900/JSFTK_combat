import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { tEncounterChoice } from '../../game/Encounter/type'
import { getChoiceText } from '../../game/Encounter/constants'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { Button } from '../../elements/button'
import { HeadingSm, Text } from '../../elements/typography'

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
      <HeadingSm
        style={{
          textAlign: 'center',
        }}
      >
        Your Journey {level === 0 ? 'Begins' : 'Continues'}.
      </HeadingSm>
      <Text
        style={{
          marginBottom: 24,
          padding: 8,
        }}
      >
        {getChoiceText(currentChoice, previousChoice)}
      </Text>
      {encounters.length - 1 !== level && (
        <FlexContainer style={{ justifyContent: 'center' }}>
          {encounters[level].choices.map((e, i) => (
            <Button
              key={e.id}
              onClick={() => chooseCurrent(i)}
              style={{ whiteSpace: 'nowrap', padding: '8px 12px' }}
            >
              {getNextText(encounters[level].choices.length, i)}
            </Button>
          ))}
        </FlexContainer>
      )}
      {encounters.length - 1 === level && (
        <FlexContainer style={{ justifyContent: 'center' }}>
          <Button onClick={() => chooseCurrent(0)}>Proceed</Button>
        </FlexContainer>
      )}
    </FlexContainer>
  )
}

const getNextText = (size: number, index: number): string => {
  switch (size) {
    case 1:
      return 'Proceed'
    case 2: {
      return index === 0 ? 'Go Left' : 'Go Right'
    }
    case 3: {
      return index === 0 ? 'Go Left' : index === 1 ? 'Go Straight' : 'Go Right'
    }
    default:
      return 'Proceed'
  }
}
