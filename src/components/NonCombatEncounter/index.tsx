import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { Shop } from '../Shop'
import { Shrine } from '../Shrine'
import { BossRewards } from '../BossRewards'
import { Chest } from '../Chest'

export const NonCombatEncounter = () => {
  const { currentEncounter } = useGameStateContext()
  return (
    <FlexContainer $direction='column' $full style={{ marginLeft: '60px' }}>
      {currentEncounter && currentEncounter.type === 'shop' && <Shop />}
      {currentEncounter && currentEncounter.type === 'shrine' && <Shrine />}
      {currentEncounter &&
        currentEncounter.type === 'boss' &&
        currentEncounter.completed && <BossRewards />}
      {currentEncounter && currentEncounter.type === 'reward' && <Chest />}
    </FlexContainer>
  )
}
