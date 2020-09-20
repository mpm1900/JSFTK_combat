import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { Choice } from './Choice'
import { Shop } from './Shop'
import { tShopEncounter, tShrineEncounter } from '../../game/Encounter/type'
import { Shrine } from './Shrine'

export const EncounterActions = () => {
  const { currentEncounter } = useGameStateContext()
  return (
    <FlexContainer
      $direction='column'
      style={{
        background:
          'linear-gradient(0deg, rgba(0,7,12,0) 0%, rgba(0,7,12,0.68) 10%, rgba(0,7,18,1) 35%)',
        marginRight: '60px',
        padding: '16px 8px',
        width: 300,
        color: 'rgba(255,255,255,0.8)',
      }}
    >
      {currentEncounter ? (
        <>
          {currentEncounter.completed ? (
            <Choice />
          ) : (
            <>
              {currentEncounter.type === 'shop' && (
                <Shop currentEncounter={currentEncounter as tShopEncounter} />
              )}
              {currentEncounter.type === 'shrine' && (
                <Shrine
                  currentEncounter={currentEncounter as tShrineEncounter}
                />
              )}
            </>
          )}
        </>
      ) : (
        <Choice />
      )}
    </FlexContainer>
  )
}
