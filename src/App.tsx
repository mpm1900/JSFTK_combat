import React, { useState } from 'react'
import { CombatContextProvider } from './contexts/CombatContext'
import { PartyT } from './types'
import { makeParty } from './functions'
import { Combat } from './domain/Combat'
import { CombatLogContextProvider } from './contexts/CombatLogContext'
import { ModalContextProvider } from './contexts/ModalContext'

export const App = () => {
  const [rawEnemyParty, setRawEnemyParty] = useState<PartyT>(makeParty(3))
  return (
    <CombatContextProvider
      enemyParty={rawEnemyParty}
      setEnemyParty={setRawEnemyParty}
    >
      <CombatLogContextProvider>
        <ModalContextProvider>
          <Combat />
        </ModalContextProvider>
      </CombatLogContextProvider>
    </CombatContextProvider>
  )
}
