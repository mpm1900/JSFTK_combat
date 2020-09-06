import React, { useEffect } from 'react'
import { usePartyContext } from '../contexts/PartyContext'
import { FlexContainer, FullContainer } from '../elements/flex'
import { RedButton } from '../elements/button'
import { useHistory } from 'react-router'
import { getSkillResults, commitSkillResults } from '../functions'
import { AppHeader } from '../components/AppHeader'
import { PartyResources } from '../components/PartyResources'
import { useUIContext } from '../contexts/UIContext'

export const Party = () => {
  const { party, rawParty, updateParty } = usePartyContext()
  const history = useHistory()
  const {
    setPlayerCanEquipItem,
    setOnCharacterConsumableClick,
  } = useUIContext()
  const enterCombat = () => {
    history.push('/JSFTK_combat/combat')
  }
  useEffect(() => {
    setPlayerCanEquipItem(true)
    console.log('setting')
    setOnCharacterConsumableClick((character, consumableIndex) => {
      if (!character) return
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
      const parties = commitSkillResults(rawParty, rawParty)(result, false)
      updateParty(parties.party)
    })
    return () => {
      setPlayerCanEquipItem(false)
      setOnCharacterConsumableClick((c, i, item) => {})
    }
  }, [party, rawParty, updateParty])
  return (
    <FlexContainer
      $full
      $direction='column'
      style={{
        overflow: 'hidden',
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
      </FlexContainer>
    </FlexContainer>
  )
}
