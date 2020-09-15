import React from 'react'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { Button } from '../../elements/button'
import { FlexContainer } from '../../elements/flex'
import { tShopEncounter } from '../../game/Encounter/type'

export interface ShopPropsT {
  currentEncounter: tShopEncounter
}
export const Shop = (props: ShopPropsT) => {
  const { currentEncounter } = props
  const { nextLevel } = useGameStateContext()
  return (
    <FlexContainer $direction='column' style={{ justifyContent: 'center' }}>
      {currentEncounter.type === 'shop' && (
        <>
          <h3
            style={{
              margin: '0 0 16px 0',
              color: 'white',
              textAlign: 'center',
            }}
          >
            You found a shop!
          </h3>
          <span
            style={{
              color: 'rgba(255,255,255,0.7)',
              marginBottom: 24,
            }}
          >
            Amidst your journey, you discover a merchant, a traveling salemen
            with all manor of wares to assist in your adventure.
          </span>
        </>
      )}
      <FlexContainer style={{ justifyContent: 'center' }}>
        <Button onClick={() => nextLevel()}>Travel Deeper</Button>
      </FlexContainer>
    </FlexContainer>
  )
}
