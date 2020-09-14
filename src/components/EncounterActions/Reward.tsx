import React from 'react'
import { useHistory } from 'react-router'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { useModalContext } from '../../contexts/ModalContext'
import { Button } from '../../elements/button'
import { FlexContainer } from '../../elements/flex'
import { tRewardEncounter } from '../../game/Encounter/type'
import { Theme } from '../../theme'

export interface RewardPropsT {
  currentEncounter: tRewardEncounter
}

export const Reward = (props: RewardPropsT) => {
  const { currentEncounter } = props
  const { floor, floors, nextFloor } = useGameStateContext()
  const history = useHistory()
  const { open } = useModalContext()
  const onClick = () => {
    if (floor === floors.length - 1) {
      history.push('/JSFTK_combat')
      open(
        <div style={{ textAlign: 'center', fontFamily: Theme.titleFont }}>
          <h1>You've Defeated the Lich! You did it!</h1>
        </div>,
      )
    } else {
      nextFloor()
    }
  }
  return (
    <FlexContainer $direction='column' style={{ justifyContent: 'center' }}>
      <h3 style={{ fontFamily: Theme.titleFont, fontWeight: 'normal' }}>
        You've cleansed an evil.
      </h3>
      <FlexContainer style={{ justifyContent: 'center' }}>
        <Button onClick={onClick}>Travel Deeper</Button>
      </FlexContainer>
    </FlexContainer>
  )
}
