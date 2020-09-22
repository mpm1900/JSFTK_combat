import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useGameState, useGameStateActions } from '../../state/game2'
import { tEncounter, tFloor2 } from '../../game/Encounter/type'
import { EncounterArrayT, HexT } from '../../grid/types'
import { makeHex } from '../../grid/util'
import { useModalContext } from '../ModalContext'

export interface GameStateContextT {
  started: boolean
  encounters: EncounterArrayT
  floors: tFloor2[]
  floor: number
  currentHex: HexT | undefined
  currentEncounter: tEncounter | undefined
  previousEncounter: tEncounter | undefined
  loading: boolean
  chooseNext: (hex: HexT) => void
  nextFloor: () => void
  reset: () => void
  removeItem: (itemId: string) => void
  completeCurrent: () => void
  openCurrent: () => void
}

export const defaultValue: GameStateContextT = {
  started: false,
  encounters: [],
  floors: [],
  floor: 0,
  currentHex: undefined,
  currentEncounter: undefined,
  previousEncounter: undefined,
  loading: false,
  chooseNext: (hex) => {},
  nextFloor: () => {},
  reset: () => {},
  removeItem: (itemId) => {},
  completeCurrent: () => {},
  openCurrent: () => {},
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
  const { floors, floor, hex, loading } = useGameState()
  const [started, setStarted] = useState(false)
  const currentFloor = floors[floor]
  const encounters = currentFloor.encounters
  const {
    nextFloor,
    chooseNext,
    reset,
    removeItem,
    completeCurrent,
    openCurrent,
  } = useGameStateActions()
  const currentEncounter = useMemo(() => {
    if (!hex) return undefined
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
        loading,
        reset,
        chooseNext,
        nextFloor,
        removeItem,
        completeCurrent,
        openCurrent,
      }}
    >
      {children}
    </GameStateContext.Provider>
  )
}
