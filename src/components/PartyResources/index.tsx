import React from 'react'
import { usePartyContext } from '../../contexts/PartyContext'
import { FlexContainer } from '../../elements/flex'
import Gold from '../../icons/svg/delapouite/coins.svg'
import { Icon } from '../Icon'

export const PartyResources = () => {
  const { party } = usePartyContext()

  return (
    <FlexContainer
      style={{ alignItems: 'center', color: 'white', paddingRight: 20 }}
    >
      <Icon src={Gold} size={18} style={{ marginRight: 8 }} />
      {party.gold}
    </FlexContainer>
  )
}
