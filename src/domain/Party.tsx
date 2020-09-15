import React, { useEffect } from 'react'
import { usePartyContext } from '../contexts/PartyContext'
import { FlexContainer, FullContainer } from '../elements/flex'
import { Button } from '../elements/button'
import { useHistory } from 'react-router'
import { AppHeader } from '../components/AppHeader'
import { PartyResources } from '../components/PartyResources'
import { useUIContext } from '../contexts/UIContext'
import { useGameStateContext } from '../contexts/GameStateContext'
import { getSkillResult } from '../game/Skill/util'
import { commitSkillResults } from '../game/Skill/committer'
import { NonCombatEncounter } from '../components/NonCombatEncounter'
import { EncounterActions } from '../components/EncounterActions'

export const Party = () => {
  const { party, rawParty, updateParty } = usePartyContext()
  const { level } = useGameStateContext()
  const history = useHistory()
  const {
    setPlayerCanEquipItem,
    setOnCharacterConsumableClick,
  } = useUIContext()

  useEffect(() => {
    setPlayerCanEquipItem(true)
    setOnCharacterConsumableClick((character, consumableIndex) => {
      if (!character) return
      const consumable = character.consumables[consumableIndex]
      const targets =
        consumable.skill.targetType === 'self'
          ? [character]
          : consumable.skill.targetType === 'party'
          ? party.characters
          : []
      const result = getSkillResult(character, targets, consumable.skill)
      const parties = commitSkillResults(rawParty, rawParty, {})(result)
      updateParty(parties.playerParty)
    })
    return () => {
      setPlayerCanEquipItem(false)
      setOnCharacterConsumableClick((c, i, item) => {})
    }
  }, [party, rawParty, updateParty])

  return (
    <FlexContainer $full $direction='column' style={{ height: '100%' }}>
      <AppHeader
        left={
          <>
            <Button
              onClick={() => history.push('/JSFTK_combat')}
              style={{ borderBottom: 0 }}
            >
              Restart
            </Button>
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
          Level {level}
        </FlexContainer>
      </AppHeader>
      <FlexContainer $full $direction='column'>
        <FlexContainer $full>
          <NonCombatEncounter />
          <EncounterActions />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}
