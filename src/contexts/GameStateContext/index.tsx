import React, { useContext, useMemo } from 'react'
import { generateTree } from '../../types/Tree'
import { useGameState, useGameStateActions } from '../../state/game'
import { EncounterT, EncounterChoiceT } from '../../types/Encounter'

export interface GameStateContextT {
  encounters: EncounterChoiceT[]
  level: number
  currentChoice: EncounterChoiceT | undefined
  currentEncounter: EncounterT | undefined
  chooseCurrent: (value: 'left' | 'right') => void
  nextLevel: () => void
  reset: () => void
}

const _tree = generateTree()
export const defaultValue: GameStateContextT = {
  encounters: [],
  level: 0,
  currentChoice: undefined,
  currentEncounter: undefined,
  chooseCurrent: (value) => {},
  nextLevel: () => {},
  reset: () => {},
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
  const gsc = useGameStateActions()
  const { nextLevel, chooseCurrent } = gsc
  const currentChoice = useMemo(() => {
    return encounters[level]
  }, [encounters, level])
  const currentEncounter = useMemo(() => {
    const choice = encounters[level]
    if (choice && choice.value) {
      return choice[choice.value]
    }
  }, [encounters, level])

  const reset = () => {
    gsc.reset()
  }

  return (
    <GameStateContext.Provider
      value={{
        encounters,
        level,
        currentChoice,
        currentEncounter,
        reset,
        nextLevel,
        chooseCurrent,
      }}
    >
      {children}
    </GameStateContext.Provider>
  )
}
