import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { HeadingSm, Text } from '../../elements/typography'
import { ENCOUNTER_TEXTS } from '../../game/Encounter/text'
import { getDepth } from '../../grid/util'

export interface ChoicePropsT {}

export const Choice = (props: ChoicePropsT) => {
  const {
    floor,
    floors,
    currentEncounter,
    previousEncounter,
    currentHex,
  } = useGameStateContext()
  const currentFloor = floors[floor]
  const depth =
    currentEncounter && currentHex
      ? getDepth(currentHex, currentFloor.size) + 1
      : 0
  const text = ENCOUNTER_TEXTS[floor][depth]
  return (
    <FlexContainer $direction='column' style={{ paddingTop: 24 }}>
      <HeadingSm
        style={{
          textAlign: 'center',
        }}
      >
        Your Journey{' '}
        {currentEncounter === undefined && floor === 0 ? 'Begins' : 'Continues'}
        .
      </HeadingSm>
      <Text
        style={{
          marginBottom: 24,
          padding: 8,
        }}
      >
        {text && text()}
      </Text>
    </FlexContainer>
  )
}
