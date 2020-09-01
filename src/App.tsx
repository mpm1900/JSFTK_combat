import React, { useState, useMemo } from 'react'
import { CombatContextProvider } from './contexts/CombatContext'
import { PartyT } from './types'
import { makeParty, processParty } from './functions'
import { Combat } from './domain/Combat'
import { CombatLogContextProvider } from './contexts/CombatLogContext'
import { ModalContextProvider } from './contexts/ModalContext'

export const App = () => {
  const [rawEnemyParty, setRawEnemyParty] = useState<PartyT>(makeParty(3))
  const enemyParty = useMemo(() => processParty(rawEnemyParty), [rawEnemyParty])
  return (
    <CombatContextProvider
      enemyParty={enemyParty}
      rawEnemyParty={rawEnemyParty}
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
