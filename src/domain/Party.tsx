import React from 'react'
import { usePartyContext } from '../contexts/PartyContext'
import { FlexContainer, FullContainer } from '../elements/flex'
import { PartyCharacters } from '../components/PartyCharacters'
import { BoxContainer } from '../elements/box'
import { RedButton } from '../elements/button'
import { useHistory } from 'react-router'
import { getSkillResults, commitSkillResults } from '../functions'
import ForestBg from '../assets/img/flat-forestred.jpg'
import { AppHeader } from '../components/AppHeader'
import { PartyResources } from '../components/PartyResources'
import { useUIContext } from '../contexts/UIContext'

export const Party = () => {
  const {
    party,
    rawParty,
    activeCharacter,
    updateParty,
    setActiveCharacter,
  } = usePartyContext()
  const history = useHistory()
  const enterCombat = () => {
    history.push('/JSFTK_combat/combat')
  }
  return (
    <FlexContainer
      $full
      $direction='column'
      style={{
        height: '100%',
        overflow: 'hidden',
        background: `url(${ForestBg}) center center fixed no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      <AppHeader
        left={
          <>
            <RedButton onClick={enterCombat}>Enter Combat</RedButton>
            <FullContainer />
          </>
        }
        right={
          <FlexContainer $full style={{ justifyContent: 'flex-end' }}>
            <PartyResources />
          </FlexContainer>
        }
      >
        <FlexContainer
          $full
          style={{
            color: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Edit Party
        </FlexContainer>
      </AppHeader>
      <FlexContainer $full $direction='column' style={{ padding: '30px 10px' }}>
        <FlexContainer $full></FlexContainer>
        <div>
          <PartyCharacters
            party={party}
            activeCharacter={activeCharacter}
            canEquip={true}
            onCharacterClick={(c) => setActiveCharacter(c)}
            onConsumableClick={(character, consumableIndex) => {
              const consumable = character.consumables[consumableIndex]
              const targets =
                consumable.skill.targetType === 'self'
                  ? [character]
                  : consumable.skill.targetType === 'party'
                  ? party.characters
                  : []
              const result = getSkillResults(
                consumable.skill,
                character,
                targets,
                consumableIndex,
              )
              const parties = commitSkillResults(rawParty, rawParty)(
                result,
                false,
              )
              updateParty(parties.party)
            }}
          />
        </div>
      </FlexContainer>
    </FlexContainer>
  )
}
