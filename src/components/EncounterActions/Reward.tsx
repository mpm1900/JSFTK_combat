import React, { useEffect } from 'react'
import { usePartyContext } from '../../contexts/PartyContext'
import { FlexContainer } from '../../elements/flex'
import { Text } from '../../elements/typography'
import { tRewardEncounter } from '../../game/Encounter/type'
import { Theme } from '../../theme'

export interface RewardPropsT {
  currentEncounter: tRewardEncounter
}

export const Reward = (props: RewardPropsT) => {
  const { refreshParty } = usePartyContext()

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
