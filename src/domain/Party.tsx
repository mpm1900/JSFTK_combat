import React from 'react'
import { usePartyContext } from '../contexts/PartyContext'
import { FlexContainer, FullContainer } from '../elements/flex'
import { PartyCharacters } from '../components/PartyCharacters'
import { BoxContainer } from '../elements/box'
import { RedButton } from '../elements/button'
import { useHistory } from 'react-router'
import { PartyActiveCharacter } from '../components/PartyActiveCharacter'
import { getSkillResults, commitSkillResults, equipArmor } from '../functions'
import { ArmorPreview } from '../components/ArmorPreview'
import { ArmorT, ProcessedWeaponT } from '../types'
import { WeaponPreview } from '../components/WeaponPreview'

export const Party = () => {
  const {
    party,
    rawParty,
    activeCharacter,
    updateParty,
    findRawCharacter,
    setActiveCharacter,
    equipItem,
  } = usePartyContext()
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
      <FlexContainer $full></FlexContainer>
      <div style={{ marginBottom: 30 }}>
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
  )
}
