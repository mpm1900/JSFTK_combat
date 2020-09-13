import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { Shop } from '../Shop'
import { Shrine } from '../Shrine'
import { EncounterHistory } from '../EncounterHistory'
import { BossRewards } from '../BossRewards'

export const NonCombatEncounter = () => {
  const { currentEncounter, currentChoice } = useGameStateContext()
  return (
    <FlexContainer $direction='column' $full style={{ marginLeft: '60px' }}>
      {currentEncounter && currentEncounter.type === 'shop' && <Shop />}
      {currentEncounter && currentEncounter.type === 'shrine' && <Shrine />}
      {currentEncounter && currentEncounter.type === 'reward' && (
        <BossRewards />
      )}
      {!currentEncounter && currentChoice && <EncounterHistory />}
    </FlexContainer>
  )
}
