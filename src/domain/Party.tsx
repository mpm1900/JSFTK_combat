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
      <FlexContainer
        $full
        style={{ padding: 16, maxHeight: 'calc(100% - 270px)' }}
      >
        {/*
        <BoxContainer
          style={{ flex: 1 }}
          substyle={{ overflow: 'auto', maxHeight: '100%', background: '#111' }}
        >
          <FlexContainer>
            <FlexContainer $direction='column'>
              {party.items
                .filter((i) => i.itemType === 'armor')
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                  <ArmorPreview
                    armor={item as ArmorT}
                    showEquipButton={
                      ((item as ArmorT).resource === 'offhand' &&
                        !activeCharacter.weapon.twoHand) ||
                      (item as ArmorT).resource !== 'offhand'
                    }
                    onEquipClick={() => {
                      equipItem(activeCharacter.id, item)
                    }}
                  />
                ))}
            </FlexContainer>
            <FlexContainer $direction='column'>
              {party.items
                .filter((i) => i.itemType === 'weapon')
                .map((item) => (
                  <WeaponPreview
                    weapon={item as ProcessedWeaponT}
                    showEquipButton={true}
                    onEquipClick={() => {
                      equipItem(activeCharacter.id, item)
                    }}
                  />
                ))}
            </FlexContainer>
          </FlexContainer>
                  </BoxContainer>*/}
        <PartyActiveCharacter
          party={party}
          character={activeCharacter}
          equipItem={equipItem}
        />
      </FlexContainer>
      <div style={{ marginBottom: 30 }}>
        <PartyCharacters
          party={party}
          activeCharacter={activeCharacter}
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
