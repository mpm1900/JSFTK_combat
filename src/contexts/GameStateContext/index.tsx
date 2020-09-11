import React, { useContext, useMemo } from 'react'
import { useGameState, useGameStateActions } from '../../state/game'
import { tEncounterChoice, tEncounter } from '../../game/Encounter/type'

export interface GameStateContextT {
  encounters: tEncounterChoice[]
  level: number
  currentChoice: tEncounterChoice | undefined
  previousChoice: tEncounterChoice | undefined
  currentEncounter: tEncounter | undefined
  chooseCurrent: (value: 'left' | 'right') => void
  nextLevel: () => void
  reset: () => void
  removeItem: (choiceId: string, encounterId: string, itemId: string) => void
}

export const defaultValue: GameStateContextT = {
  encounters: [],
  level: 0,
  currentChoice: undefined,
  currentEncounter: undefined,
  previousChoice: undefined,
  chooseCurrent: (value) => {},
  nextLevel: () => {},
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
  const { encounters, level } = useGameState()
  const { nextLevel, chooseCurrent, reset, removeItem } = useGameStateActions()
  const currentChoice = useMemo(() => {
    return encounters[level]
  }, [encounters, level])
  const previousChoice = useMemo(() => {
    return encounters[level - 1]
  }, [encounters, level])
  const currentEncounter = useMemo(() => {
    const choice = encounters[level]
    if (choice && choice.value) {
      return choice[choice.value]
    }
  }, [encounters, level])

  return (
    <GameStateContext.Provider
      value={{
        encounters,
        level,
        currentChoice,
        previousChoice,
        currentEncounter,
        reset,
        nextLevel,
        chooseCurrent,
        removeItem,
      }}
    >
      {children}
    </GameStateContext.Provider>
  )
}
