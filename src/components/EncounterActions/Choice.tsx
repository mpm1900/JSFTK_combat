import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { HeadingSm, Text } from '../../elements/typography'
import { ENCOUNTER_TEXTS } from '../../game/Encounter/text'
import { getDepth } from '../../grid/util'
import { FLOOR_1_ID } from '../../game/Encounter/floors/level1/floor-1'

export interface ChoicePropsT {}

export const Choice = (props: ChoicePropsT) => {
  const {
    floorId,
    currentEncounter,
    currentFloor,
    currentHex,
  } = useGameStateContext()
  const depth =
    currentEncounter && currentHex
      ? getDepth(currentHex, currentFloor.size) + 1
      : 0
  const text = ENCOUNTER_TEXTS[floorId][depth]
  return (
    <FlexContainer $direction='column' style={{ paddingTop: 24 }}>
      <HeadingSm
        style={{
          textAlign: 'center',
        }}
      >
        Your Journey{' '}
        {currentEncounter === undefined && floorId === FLOOR_1_ID
          ? 'Begins'
          : 'Continues'}
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
