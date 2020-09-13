import React, { useEffect } from 'react'
import { FlexContainer } from '../../elements/flex'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { Choice } from './Choice'
import { Shop } from './Shop'
import { tRewardEncounter, tShopEncounter } from '../../game/Encounter/type'
import { Reward } from './Reward'

export const EncounterActions = () => {
  const {
    currentChoice,
    currentEncounter,
    chooseCurrent,
  } = useGameStateContext()
  useEffect(() => {
    if (currentChoice?.left.type === 'reward') {
      chooseCurrent('left')
    }
  }, [])
  return (
    <FlexContainer
      $direction='column'
      style={{
        background:
          'linear-gradient(0deg, rgba(0,5,8,0) 0%, rgba(8,8,8,0.6811099439775911) 10%, rgba(17,17,25,1) 35%)',
        marginRight: '60px',
        padding: '16px 8px',
        width: 300,
        color: 'rgba(255,255,255,0.8)',
      }}
    >
      {currentChoice && !currentEncounter && (
        <Choice currentChoice={currentChoice} />
      )}
      {currentEncounter && (
        <>
          {currentEncounter.type === 'shop' && (
            <Shop currentEncounter={currentEncounter as tShopEncounter} />
          )}
          {currentEncounter.type === 'reward' && (
            <Reward currentEncounter={currentEncounter as tRewardEncounter} />
          )}
        </>
      )}
    </FlexContainer>
  )
}
