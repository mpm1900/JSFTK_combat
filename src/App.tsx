import React from 'react'
import ForestBg from './assets/img/forests/flat-forestred.jpg'
import Forest2 from './assets/img/forests/8.png'
import Dungeon1 from './assets/img/dungeon/4.png'
import { Switch } from 'react-router-dom'
import { Combat } from './domain/Combat'
import { CombatLogContextProvider } from './contexts/CombatLogContext'
import { ModalContextProvider } from './contexts/ModalContext'
import { makeRoute, RouteController } from './routes'
import { Party } from './domain/Party'
import { Start } from './domain/Start'
import { UIContextProvider, useUIContext } from './contexts/UIContext'
import { usePartyContext } from './contexts/PartyContext'
import { PlayerParty } from './components/PlayerParty'
import { FlexContainer, FullContainer } from './elements/flex'
import { LinkedCombatContext } from './contexts/CombatContext/context'

const CombatDomain = () => {
  return (
    <CombatLogContextProvider>
      <Combat />
    </CombatLogContextProvider>
  )
}

const GlobalCharacters = () => {
  const { party } = usePartyContext()
  const { onCharacterConsumableClick } = useUIContext()
  return (
    <div style={{ marginBottom: 30 }}>
      <PlayerParty
        party={party}
        onConsumableClick={(c, i, item) => {
          if (onCharacterConsumableClick) {
            onCharacterConsumableClick(c, i, item)
          }
        }}
      />
    </div>
  )
}

export const App = () => {
  return (
    <ModalContextProvider>
      <LinkedCombatContext>
        <UIContextProvider>
          <FlexContainer
            $full
            $direction='column'
            style={{
              height: '100%',
              overflow: 'hidden',
              background: `url(${Forest2}) center center fixed no-repeat`,
              backgroundSize: 'cover',
            }}
          >
            <FlexContainer
              $full
              $direction='column'
              style={{ background: 'rgba(20,0,20,0.3)' }}
            >
              <RouteController />
              <FullContainer>
                <Switch>
                  {makeRoute('/party', Party)}
                  {makeRoute('/combat', CombatDomain)}
                  {makeRoute('/', Start)}
                </Switch>
              </FullContainer>
              <GlobalCharacters />
            </FlexContainer>
          </FlexContainer>
        </UIContextProvider>
      </LinkedCombatContext>
    </ModalContextProvider>
  )
}
