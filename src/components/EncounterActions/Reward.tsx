import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { useModalContext } from '../../contexts/ModalContext'
import { usePartyContext } from '../../contexts/PartyContext'
import { Button } from '../../elements/button'
import { FlexContainer } from '../../elements/flex'
import { Text } from '../../elements/typography'
import { tRewardEncounter } from '../../game/Encounter/type'
import { Theme } from '../../theme'

export interface RewardPropsT {
  currentEncounter: tRewardEncounter
}

export const Reward = (props: RewardPropsT) => {
  const { currentEncounter } = props
  const { floor, floors, nextFloor } = useGameStateContext()
  const { refreshParty } = usePartyContext()
  const history = useHistory()
  const { open } = useModalContext()
  const onClick = () => {
    if (floor === floors.length - 1) {
      history.push('/')
      open(
        <div style={{ textAlign: 'center', fontFamily: Theme.titleFont }}>
          <h1>You've Defeated the Lich! You did it!</h1>
        </div>,
      )
    } else {
      nextFloor()
    }
  }

  useEffect(() => {
    refreshParty()
  }, [])

  return (
    <FlexContainer $direction='column' style={{ justifyContent: 'center' }}>
      <h3 style={{ fontFamily: Theme.titleFont, fontWeight: 'normal' }}>
        You've cleansed an evil.
      </h3>
      <Text style={{ marginBottom: 40, padding: 8 }}>
        You've defeated the Lich Lord of the Forest, but you discoved what he
        was guarding. A tomb, sealed for centuries, a relic of civilizations
        past.
      </Text>
      <FlexContainer style={{ justifyContent: 'center' }}></FlexContainer>
    </FlexContainer>
  )
}
