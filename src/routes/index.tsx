import React, { useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { useGameStateContext } from '../contexts/GameStateContext'
import { useModalContext } from '../contexts/ModalContext'
import { Theme } from '../theme'

export const makeRoute = (path: string, Component: React.FC) => (
  <Route path={`${path}`}>
    <Component />
  </Route>
)

export const RouteController = () => {
  const {
    encounters,
    currentEncounter,
    level,
    floor,
    floors,
    started,
  } = useGameStateContext()
  const history = useHistory()
  const { open } = useModalContext()
  useEffect(() => {
    if (!started) {
      history.push('/')
    }
    if (level > encounters.length - 1 || floor > floors.length - 2) {
      open(
        <div style={{ textAlign: 'center', fontFamily: Theme.titleFont }}>
          <h1>You've Defeated the Lich! You did it!</h1>
        </div>,
      )
      history.push('/')
    } else if (
      currentEncounter &&
      (currentEncounter.type === 'combat' || currentEncounter.type === 'boss')
    ) {
      history.push('/combat')
    } else if (!currentEncounter && level > 0) {
      history.push('/party')
    }
  }, [currentEncounter, level, started])
  return null
}
