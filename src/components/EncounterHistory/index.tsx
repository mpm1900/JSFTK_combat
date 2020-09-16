import React from 'react'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { FlexContainer } from '../../elements/flex'
import { Floor } from './Floor'

export interface EncounterHistoryPropsT {}

export const EncounterHistory = (props: EncounterHistoryPropsT) => {
  const { floors, floor, level } = useGameStateContext()

  return (
    <FlexContainer $direction='column'>
      {floors.map((f, fi) => (
        <Floor
          key={f.id}
          floor={f}
          floorIndex={fi}
          currentFloorIndex={floor}
          encounterIndex={level}
        />
      ))}
    </FlexContainer>
  )
}
