import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useGameState, useGameStateActions } from '../../state/game2'
import { tEncounter, tFloor2 } from '../../game/Encounter/type'
import { EncounterArrayT, HexT } from '../../grid/types'
import { makeHex } from '../../grid/util'

export interface GameStateContextT {
  started: boolean
  encounters: EncounterArrayT
  floors: tFloor2[]
  floor: number
  currentHex: HexT
  currentEncounter: tEncounter | undefined
  previousEncounter: tEncounter | undefined
  chooseNext: (hex: HexT) => void
  nextFloor: () => void
  reset: () => void
  removeItem: (itemId: string) => void
  completeCurrent: () => void
}

export const defaultValue: GameStateContextT = {
  started: false,
  encounters: [],
  floors: [],
  floor: 0,
  currentHex: makeHex(0, 0, 0),
  currentEncounter: undefined,
  previousEncounter: undefined,
  chooseNext: (hex) => {},
  nextFloor: () => {},
  reset: () => {},
  removeItem: (itemId) => {},
  completeCurrent: () => {},
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
  const { floors, floor, hex } = useGameState()
  const [started, setStarted] = useState(false)
  const currentFloor = floors[floor]
  const encounters = currentFloor.encounters
  const {
    nextFloor,
    chooseNext,
    reset,
    removeItem,
    completeCurrent,
  } = useGameStateActions()
  const currentEncounter = useMemo(() => {
    return encounters[hex.q][hex.r][hex.s]
  }, [hex, JSON.stringify(encounters)])
  const [previousEncounter, setPreviousEncounter] = useState<
    tEncounter | undefined
  >()

  useEffect(() => {
    if (currentEncounter && currentEncounter.completed) {
      setPreviousEncounter(currentEncounter)
    }
  }, [currentEncounter])

  useEffect(() => {
    setStarted(true)
  }, [])

  return (
    <GameStateContext.Provider
      value={{
        started,
        encounters,
        floors,
        floor,
        currentHex: hex,
        currentEncounter,
        previousEncounter,
        reset,
        chooseNext,
        nextFloor,
        removeItem,
        completeCurrent: () => {
          completeCurrent()
        },
      }}
    >
      {children}
    </GameStateContext.Provider>
  )
}
