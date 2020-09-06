import React, { useEffect } from 'react'
import { usePartyContext } from '../contexts/PartyContext'
import { FlexContainer, FullContainer } from '../elements/flex'
import { RedButton, Button } from '../elements/button'
import { useHistory } from 'react-router'
import { getSkillResults, commitSkillResults } from '../functions'
import { AppHeader } from '../components/AppHeader'
import { PartyResources } from '../components/PartyResources'
import { useUIContext } from '../contexts/UIContext'
import Tree from 'react-tree-graph'
import 'react-tree-graph/dist/style.css'
import { useGameStateContext } from '../contexts/GameStateContext'

export const Party = () => {
  const { party, rawParty, updateParty } = usePartyContext()
  const { processedTree, activeNode } = useGameStateContext()
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

  useEffect(() => {
    console.log('PARTY', activeNode)
    if (activeNode.type === 0 && !activeNode.completed) {
      history.push('/JSFTK_combat/combat')
    }
  }, [activeNode])

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
            {/*<RedButton onClick={enterCombat}>Enter Combat</RedButton>*/}
            <Button onClick={() => history.push('/JSFTK_combat')}>
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
          Edit Party
        </FlexContainer>
      </AppHeader>
      <FlexContainer $full $direction='column' style={{ padding: '30px 10px' }}>
        <FlexContainer
          $full
          style={{
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.4)',
            padding: 10,
          }}
        >
          {activeNode.completed && (
            <Tree data={processedTree} height={600} width={1200}></Tree>
          )}
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}
