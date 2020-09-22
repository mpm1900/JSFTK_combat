import React, { useEffect } from 'react'
import { Route, useHistory, useLocation } from 'react-router-dom'
import { useGameStateContext } from '../contexts/GameStateContext'
import { useModalContext } from '../contexts/ModalContext'
import { FLOOR_3A_ID } from '../game/Encounter/floors/floor-3'
import { tRewardEncounter } from '../game/Encounter/type'
import { Theme } from '../theme'

export const makeRoute = (path: string, Component: React.FC) => (
  <Route path={`${path}`}>
    <Component />
  </Route>
)

export const RouteController = () => {
  const { currentEncounter, floorId, floors, started } = useGameStateContext()
  const history = useHistory()
  const { open } = useModalContext()
  useEffect(() => {
    if (!started) {
      history.push('/')
    }
    if (floorId === FLOOR_3A_ID) {
      open(
        <div style={{ textAlign: 'center', fontFamily: Theme.titleFont }}>
          <h1>You've Defeated the Lich! You did it!</h1>
        </div>,
      )
      history.push('/')
    } else if (
      currentEncounter &&
      !currentEncounter.completed &&
      (currentEncounter.type === 'combat' ||
        currentEncounter.type === 'boss' ||
        (currentEncounter.type === 'reward' &&
          (currentEncounter as tRewardEncounter).isMimic &&
          (currentEncounter as tRewardEncounter).isOpened))
    ) {
      history.push('/combat')
    } else if (started && currentEncounter && currentEncounter.completed) {
      history.push('/party')
    }
  }, [currentEncounter, started])
  return null
}
