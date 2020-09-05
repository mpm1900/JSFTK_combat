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
import { UIContextProvider } from './contexts/UIContext'

const CombatDomain = () => {
  const [rawEnemyParty, setRawEnemyParty] = useState<PartyT>(makeParty(3))
  return (
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
  )
}

const PartyDomain = () => {
  return <Party />
}

export const App = () => {
  return (
    <ModalContextProvider>
      <UIContextProvider>
        <Switch>
          {makeRoute('/party', PartyDomain)}
          {makeRoute('/combat', CombatDomain)}
          {makeRoute('/', Start)}
        </Switch>
      </UIContextProvider>
    </ModalContextProvider>
  )
}
