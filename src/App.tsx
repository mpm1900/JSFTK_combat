import React, { useState, useEffect } from 'react'
import ForestBg from './assets/img/flat-forestred.jpg'
import { Switch, Route } from 'react-router-dom'
import { CombatContextProvider } from './contexts/CombatContext'
import { Combat } from './domain/Combat'
import { CombatLogContextProvider } from './contexts/CombatLogContext'
import { ModalContextProvider } from './contexts/ModalContext'
import { makeRoute } from './routes'
import { Party } from './domain/Party'
import { Start } from './domain/Start'
import { UIContextProvider, useUIContext } from './contexts/UIContext'
import { usePartyContext } from './contexts/PartyContext'
import { PlayerParty } from './components/PlayerParty'
import { FlexContainer, FullContainer } from './elements/flex'
import { useGameStateContext } from './contexts/GameStateContext'
import { tParty } from './game/Party/type'
import { makeParty } from './game/Party/util'
import { tCombatEncounter } from './game/Encounter/type'

const CombatDomain = () => {
  return (
    <CombatLogContextProvider>
      <ModalContextProvider>
        <Combat />
      </ModalContextProvider>
    </CombatLogContextProvider>
  )
}

const PartyDomain = () => {
  return <Party />
}

const GlobalCharacters = () => {
  const { party } = usePartyContext()
  const { onCharacterConsumableClick } = useUIContext()
  return (
    <div style={{ margin: '30px 0' }}>
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
  const { currentEncounter, level } = useGameStateContext()
  const [rawEnemyParty, setRawEnemyParty] = useState<tParty>(makeParty(0))
  useEffect(() => {
    if (currentEncounter && (currentEncounter as tCombatEncounter).party)
      setRawEnemyParty((currentEncounter as tCombatEncounter).party)
  }, [level])
  return (
    <ModalContextProvider>
      <CombatContextProvider
        enemyParty={rawEnemyParty}
        setEnemyParty={setRawEnemyParty}
        onRequestNewParty={() => {
          setRawEnemyParty(makeParty(level + 1))
        }}
      >
        <UIContextProvider>
          <FlexContainer
            $full
            $direction='column'
            style={{
              height: '100%',
              overflow: 'hidden',
              background: `url(${ForestBg}) center center fixed no-repeat`,
              backgroundSize: 'cover',
            }}
          >
            <FullContainer>
              <Switch>
                {makeRoute('/party', PartyDomain)}
                {makeRoute('/combat', CombatDomain)}
                {makeRoute('/', Start)}
              </Switch>
            </FullContainer>
            <GlobalCharacters />
          </FlexContainer>
        </UIContextProvider>
      </CombatContextProvider>
    </ModalContextProvider>
  )
}
