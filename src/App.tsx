import React from 'react'
import { Switch } from 'react-router-dom'
import { Combat } from './domain/Combat'
import { CombatLogContextProvider } from './contexts/CombatLogContext'
import { ModalContextProvider } from './contexts/ModalContext'
import { makeRoute, RouteController } from './routes'
import { Party } from './domain/Party'
import { Start } from './domain/Start'
import { UIContextProvider } from './contexts/UIContext'
import { PlayerParty } from './components/PlayerParty'
import { FullContainer } from './elements/flex'
import { LinkedCombatContext } from './contexts/CombatContext/context'
import { AppBg } from './components/AppBg'

export const App = () => {
  return (
    <ModalContextProvider>
      <LinkedCombatContext>
        <UIContextProvider>
          <CombatLogContextProvider>
            <AppBg>
              <RouteController />
              <FullContainer style={{ height: 'calc(100vh - 207px)' }}>
                <Switch>
                  {makeRoute('/party', Party)}
                  {makeRoute('/combat', Combat)}
                  {makeRoute('/', Start)}
                </Switch>
              </FullContainer>
              <PlayerParty />
            </AppBg>
          </CombatLogContextProvider>
        </UIContextProvider>
      </LinkedCombatContext>
    </ModalContextProvider>
  )
}
