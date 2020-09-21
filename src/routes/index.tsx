import React, { useEffect } from 'react'
import { Route, useHistory, useLocation } from 'react-router-dom'
import { useGameStateContext } from '../contexts/GameStateContext'
import { useModalContext } from '../contexts/ModalContext'
import { tRewardEncounter } from '../game/Encounter/type'
import { Theme } from '../theme'

export const makeRoute = (path: string, Component: React.FC) => (
  <Route path={`${path}`}>
    <Component />
  </Route>
)

export const RouteController = () => {
  const { currentEncounter, floor, floors, started } = useGameStateContext()
  const history = useHistory()
  const { open } = useModalContext()
  useEffect(() => {
    console.log('started', started)
    if (!started) {
      history.push('/')
    }
    if (floor > floors.length - 2) {
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
