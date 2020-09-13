import React, { useState, useEffect } from 'react'
import { useGameStateContext } from '../GameStateContext'
import { tParty } from '../../game/Party/type'
import { makeParty } from '../../game/Party/util'
import { tCombatEncounter } from '../../game/Encounter/type'
import { CombatContextProvider } from '.'

export interface LinkedCombatContextProviderPropsT {
  children: JSX.Element
}
export const LinkedCombatContext = (
  props: LinkedCombatContextProviderPropsT,
) => {
  const { children } = props
  const { currentEncounter, level, floor } = useGameStateContext()
  const [combatParty, setCombatParty] = useState<tParty>(
    makeParty(level, floor),
  )
  useEffect(() => {
    if (currentEncounter && (currentEncounter as tCombatEncounter).party)
      setCombatParty((currentEncounter as tCombatEncounter).party)
  }, [currentEncounter])

  return (
    <CombatContextProvider
      enemyParty={combatParty}
      setEnemyParty={setCombatParty}
      onRequestNewParty={() => {}}
    >
      {children}
    </CombatContextProvider>
  )
}
