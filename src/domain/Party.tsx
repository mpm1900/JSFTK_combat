import React from 'react'
import { usePartyContext } from '../contexts/PartyContext'
import { FlexContainer, FullContainer } from '../elements/flex'
import { PartyCharacters } from '../components/PartyCharacters'
import { BoxContainer } from '../elements/box'
import { RedButton } from '../elements/button'
import { useHistory } from 'react-router'

export const Party = () => {
  const { party, activeCharacter, setActiveCharacter } = usePartyContext()
  const history = useHistory()
  const enterCombat = () => {
    history.push('/JSFTK_combat/combat')
  }
  return (
    <FlexContainer
      $full
      $direction='column'
      style={{ height: '100%', overflow: 'hidden' }}
    >
      <FlexContainer>
        <BoxContainer style={{ flex: 1 }} substyle={{ display: 'flex' }}>
          <FullContainer />
          <RedButton onClick={enterCombat}>Enter Combat</RedButton>
        </BoxContainer>
      </FlexContainer>
      <FullContainer />
      <div style={{ marginBottom: 30 }}>
        <PartyCharacters party={party} activeCharacter={activeCharacter} />
      </div>
    </FlexContainer>
  )
}
