import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useGameState, useGameStateActions } from '../../state/game2'
import { tEncounter, tFloor2 } from '../../game/Encounter/type'
import { EncounterArrayT, HexT } from '../../grid/types'
import { FLOOR_1_ID } from '../../game/Encounter/floors/level1/floor-1'

export interface GameStateContextT {
  started: boolean
  encounters: EncounterArrayT
  floors: tFloor2[]
  floorId: string
  currentHex: HexT | undefined
  currentFloor: tFloor2
  currentEncounter: tEncounter | undefined
  previousEncounter: tEncounter | undefined
  loading: boolean
  chooseNext: (hex: HexT, visionRange: number) => void
  nextFloor: (floorId: string) => void
  reset: () => void
  removeItem: (itemId: string) => void
  completeCurrent: () => void
  openCurrent: () => void
  doneCurrent: () => void
}

export const defaultValue: GameStateContextT = {
  started: false,
  encounters: [],
  floors: [],
  floorId: FLOOR_1_ID,
  currentHex: undefined,
  currentFloor: {} as tFloor2,
  currentEncounter: undefined,
  previousEncounter: undefined,
  loading: false,
  chooseNext: (hex, visionRange) => {},
  nextFloor: (floorId) => {},
  reset: () => {},
  removeItem: (itemId) => {},
  completeCurrent: () => {},
  openCurrent: () => {},
  doneCurrent: () => {},
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
  const { floors, floorId, hex, loading } = useGameState()
  const [started, setStarted] = useState(false)
  const currentFloor = useMemo(
    () => floors.find((f) => f.id === floorId) as tFloor2,
    [floors, floorId],
  )
  const encounters = currentFloor.encounters
  const {
    nextFloor,
    chooseNext,
    reset,
    removeItem,
    completeCurrent,
    openCurrent,
    doneCurrent,
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
        floorId,
        currentHex: hex,
        currentFloor,
        currentEncounter,
        previousEncounter,
        loading,
        reset,
        chooseNext,
        nextFloor,
        removeItem,
        completeCurrent,
        openCurrent,
        doneCurrent,
      }}
    >
      {children}
    </GameStateContext.Provider>
  )
}
