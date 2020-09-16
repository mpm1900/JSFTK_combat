import React, { useContext, useMemo } from 'react'
import { useGameState, useGameStateActions } from '../../state/game'
import { tEncounterChoice, tEncounter, tFloor } from '../../game/Encounter/type'

export interface GameStateContextT {
  encounters: tEncounterChoice[]
  floors: tFloor[]
  level: number
  floor: number
  currentChoice: tEncounterChoice | undefined
  previousChoice: tEncounterChoice | undefined
  currentEncounter: tEncounter | undefined
  chooseCurrent: (value: number) => void
  nextLevel: () => void
  nextFloor: () => void
  reset: () => void
  removeItem: (choiceId: string, encounterId: string, itemId: string) => void
}

export const defaultValue: GameStateContextT = {
  encounters: [],
  floors: [],
  level: 0,
  floor: 0,
  currentChoice: undefined,
  currentEncounter: undefined,
  previousChoice: undefined,
  chooseCurrent: (value) => {},
  nextLevel: () => {},
  nextFloor: () => {},
  reset: () => {},
  removeItem: (choiceId, encounterId, itemId) => {},
}
export const GameStateContext = React.createContext<GameStateContextT>(
  defaultValue,
)
export const useGameStateContext = () => useContext(GameStateContext)

export interface GameStateProviderPropsT {
  children: JSX.Element
}
export const GameStateContextProvider = (props: GameStateProviderPropsT) => {
  const { children } = props
  const { floors, floor, level } = useGameState()
  const currentFloor = floors[floor]
  const encounters = currentFloor.encounters
  const {
    nextLevel,
    nextFloor,
    chooseCurrent,
    reset,
    removeItem,
  } = useGameStateActions()
  const currentChoice = useMemo(() => {
    return encounters[level]
  }, [encounters, level])
  const previousChoice = useMemo(() => {
    return encounters[level - 1]
  }, [encounters, level])
  const currentEncounter = useMemo(() => {
    if (currentChoice && currentChoice.chosen !== undefined) {
      return currentChoice.choices[currentChoice.chosen]
    }
  }, [encounters, level])

  return (
    <GameStateContext.Provider
      value={{
        encounters,
        floors,
        level,
        floor,
        currentChoice,
        previousChoice,
        currentEncounter,
        reset,
        nextLevel,
        nextFloor,
        chooseCurrent,
        removeItem,
      }}
    >
      {children}
    </GameStateContext.Provider>
  )
}
