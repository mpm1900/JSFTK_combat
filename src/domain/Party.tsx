import React from 'react'
import { usePartyContext } from '../contexts/PartyContext'
import { FlexContainer, FullContainer } from '../elements/flex'
import { PartyCharacters } from '../components/PartyCharacters'
import { BoxContainer } from '../elements/box'
import { RedButton } from '../elements/button'
import { useHistory } from 'react-router'
import { PartyActiveCharacter } from '../components/PartyActiveCharacter'

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
        <BoxContainer
          style={{ flex: 1 }}
          substyle={{ display: 'flex', background: '#111' }}
        >
          <RedButton onClick={enterCombat}>Enter Combat</RedButton>
          <FullContainer />
        </BoxContainer>
      </FlexContainer>
      <FlexContainer $full style={{ padding: 16 }}>
        <BoxContainer style={{ flex: 1 }}></BoxContainer>
        <PartyActiveCharacter character={activeCharacter} />
      </FlexContainer>
      <div style={{ marginBottom: 30 }}>
        <PartyCharacters
          party={party}
          activeCharacter={activeCharacter}
          onCharacterClick={(c) => setActiveCharacter(c)}
        />
      </div>
    </FlexContainer>
  )
}
