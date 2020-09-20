import React from 'react'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { FlexContainer } from '../../elements/flex'
import { makeFloor } from '../../game/Encounter/util'
import { Floor } from './Floor'

export interface EncounterHistoryPropsT {}

export const EncounterHistory = (props: EncounterHistoryPropsT) => {
  const { floors, floor } = useGameStateContext()

  return (
    <FlexContainer $direction='column'>
      {floors.map((f, fi) => (
        <Floor
          key={f.id}
          floor={makeFloor(0, 0)}
          floorIndex={fi}
          currentFloorIndex={floor}
          encounterIndex={0}
        />
      ))}
    </FlexContainer>
  )
}
