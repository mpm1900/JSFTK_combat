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
import { Shop } from '../components/Shop'
import { Shrine } from '../components/Shrine'

export const Party = () => {
  const { party, rawParty, updateParty } = usePartyContext()
  const {
    currentEncounter,
    currentChoice,
    level,
    chooseCurrent,
    nextLevel,
  } = useGameStateContext()
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
          Level {level}
        </FlexContainer>
      </AppHeader>
      <FlexContainer $full $direction='column'>
        <FlexContainer $full>
          <FlexContainer
            $direction='column'
            $full
            style={{ marginLeft: '10%' }}
          >
            {currentEncounter && currentEncounter.type === 'shop' && <Shop />}
            {currentEncounter && currentEncounter.type === 'shrine' && (
              <Shrine />
            )}
          </FlexContainer>
          <FlexContainer
            $direction='column'
            style={{
              background:
                'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(8,8,8,0.6811099439775911) 10%, rgba(17,17,17,1) 35%)',
              marginRight: '10%',
              padding: '16px 8px',
              width: 300,
            }}
          >
            {currentChoice && !currentEncounter && (
              <FlexContainer $direction='column'>
                <h3
                  style={{
                    margin: '0 0 16px 0',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  You have a choice.
                </h3>
                <span
                  style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 24 }}
                >
                  You arrive at a split path, you must make a choice on which
                  way to proceed.
                </span>
                <FlexContainer style={{ justifyContent: 'center' }}>
                  <Button onClick={() => chooseCurrent('left')}>Go Left</Button>
                  <Button onClick={() => chooseCurrent('right')}>
                    Go Right
                  </Button>
                </FlexContainer>
              </FlexContainer>
            )}
            {currentEncounter && (
              <FlexContainer
                $direction='column'
                style={{ justifyContent: 'center' }}
              >
                {currentEncounter.type === 'shop' && (
                  <>
                    <h3
                      style={{
                        margin: '0 0 16px 0',
                        color: 'white',
                        textAlign: 'center',
                      }}
                    >
                      You found a shop!
                    </h3>
                    <span
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        marginBottom: 24,
                      }}
                    >
                      Amidst your journey, you discover a merchant, a traveling
                      salemen with all manor of wares to assist in your
                      adventure.
                    </span>
                  </>
                )}
                <FlexContainer style={{ justifyContent: 'center' }}>
                  <Button onClick={() => nextLevel()}>Travel Deeper</Button>
                </FlexContainer>
              </FlexContainer>
            )}
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}
