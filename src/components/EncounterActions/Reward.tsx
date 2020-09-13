import React from 'react'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { Button } from '../../elements/button'
import { FlexContainer } from '../../elements/flex'
import { tRewardEncounter } from '../../game/Encounter/type'
import { Theme } from '../../theme'

export interface RewardPropsT {
  currentEncounter: tRewardEncounter
}

export const Reward = (props: RewardPropsT) => {
  const { currentEncounter } = props
  const { nextFloor } = useGameStateContext()
  return (
    <FlexContainer $direction='column' style={{ justifyContent: 'center' }}>
      <h3 style={{ fontFamily: Theme.titleFont, fontWeight: 'normal' }}>
        You've cleansed an evil.
      </h3>
      <FlexContainer style={{ justifyContent: 'center' }}>
        <Button onClick={() => nextFloor()}>Travel Deeper</Button>
      </FlexContainer>
    </FlexContainer>
  )
}
