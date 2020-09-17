import React from 'react'
import { usePartyContext } from '../../contexts/PartyContext'
import { FlexContainer } from '../../elements/flex'
import Gold from '../../icons/svg/delapouite/coins.svg'
import { Icon } from '../Icon'
import { NumberChange } from '../NumberChange'

export const PartyResources = () => {
  const { party } = usePartyContext()

  return (
    <FlexContainer
      style={{ alignItems: 'center', paddingRight: 20, color: '#ded9a6' }}
    >
      <Icon src={Gold} size={18} style={{ marginRight: 8 }} fill='#ded9a6' />
      <NumberChange value={party.gold} />
    </FlexContainer>
  )
}
