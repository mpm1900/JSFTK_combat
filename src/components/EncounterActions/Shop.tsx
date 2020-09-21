import React from 'react'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { Button } from '../../elements/button'
import { FlexContainer } from '../../elements/flex'
import { Text } from '../../elements/typography'
import { tShopEncounter } from '../../game/Encounter/type'

export interface ShopPropsT {
  currentEncounter: tShopEncounter
}
export const Shop = (props: ShopPropsT) => {
  const { currentEncounter } = props
  const { completeCurrent } = useGameStateContext()
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
          <Text
            style={{
              padding: 8,
              marginBottom: 24,
            }}
          >
            Amidst your journey, you discover a merchant, a traveling salemen
            with all manor of wares to assist in your adventure.
          </Text>
        </>
      )}
      <FlexContainer style={{ justifyContent: 'center' }}>
        <Button onClick={() => completeCurrent()}>Leave Shop</Button>
      </FlexContainer>
    </FlexContainer>
  )
}
