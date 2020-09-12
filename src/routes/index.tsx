import React, { useEffect } from 'react'
import { Route, useHistory } from 'react-router-dom'
import { useGameStateContext } from '../contexts/GameStateContext'
import { useModalContext } from '../contexts/ModalContext'
import { Theme } from '../theme'

export const makeRoute = (path: string, Component: React.FC) => (
  <Route path={`/JSFTK_combat${path}`}>
    <Component />
  </Route>
)

export const RouteController = () => {
  const { encounters, currentEncounter, level } = useGameStateContext()
  const history = useHistory()
  const { open } = useModalContext()
  useEffect(() => {
    if (level > encounters.length - 1) {
      open(
        <div style={{ textAlign: 'center', fontFamily: Theme.titleFont }}>
          <h1>You've Defeated the Lich! You did it!</h1>
        </div>,
      )
      history.push('/JSFTK_combat')
    } else if (
      currentEncounter &&
      (currentEncounter.type === 'combat' || currentEncounter.type === 'boss')
    ) {
      history.push('/JSFTK_combat/combat')
    } else if (!currentEncounter && level > 0) {
      history.push('/JSFTK_combat/party')
    }
  }, [currentEncounter, level])
  return null
}
