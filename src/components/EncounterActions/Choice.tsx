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
        You have a choice. {currentChoice.chosen}
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
            <Button onClick={() => chooseCurrent(i)}>
              Go {i === 0 ? 'Left' : 'Right'}
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
