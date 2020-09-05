import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { CombatContextProvider } from './contexts/CombatContext'
import { PartyT } from './types'
import { makeParty } from './functions'
import { Combat } from './domain/Combat'
import { CombatLogContextProvider } from './contexts/CombatLogContext'
import { ModalContextProvider } from './contexts/ModalContext'
import { makeRoute } from './routes'
import { Party } from './domain/Party'
import { Start } from './domain/Start'

const CombatDomain = () => {
  const [rawEnemyParty, setRawEnemyParty] = useState<PartyT>(makeParty(3))
  return (
    <ModalContextProvider>
      <CombatContextProvider
        enemyParty={rawEnemyParty}
        setEnemyParty={setRawEnemyParty}
        onRequestNewParty={() => setRawEnemyParty(makeParty(3))}
      >
        <CombatLogContextProvider>
          <ModalContextProvider>
            <Combat />
          </ModalContextProvider>
        </CombatLogContextProvider>
      </CombatContextProvider>
    </ModalContextProvider>
  )
}

const PartyDomain = () => {
  return <Party />
}

export const App = () => {
  return (
    <Switch>
      {makeRoute('/party', PartyDomain)}
      {makeRoute('/combat', CombatDomain)}
      {makeRoute('/', Start)}
    </Switch>
  )
}
