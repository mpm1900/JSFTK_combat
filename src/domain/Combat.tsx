import React, { useEffect } from 'react'
import { useCombatContext } from '../contexts/CombatContext'
import { FlexContainer, FullContainer } from '../elements/flex'
import { RoundResultRenderer } from '../components/RoundResultRenderer'
import { CombatActions } from '../components/CombatActions'
import { CombatParty } from '../components/CombatParty'
import { CombatQueue } from '../components/CombatQueue'
import { CombatLog } from '../components/CombatLog'
import { useUIContext } from '../contexts/UIContext'
import { useCombatStart } from '../hooks/useCombatStart'
import { useCombatLogContext } from '../contexts/CombatLogContext'

export const Combat = () => {
  const {
    enemyParty,
    activeCharacter,
    characters,
    queue,
    isRunning,
    isRenderingResult,
    onSkillSelect,
  } = useCombatContext()

  const { setOnCharacterConsumableClick } = useUIContext()
  const { clear } = useCombatLogContext()
  useCombatStart()
  useEffect(() => {
    setOnCharacterConsumableClick((c, index, item) => {
      if (!c) return
      if (c.id === activeCharacter.id) {
        onSkillSelect(item.skill, index)
      }
    })
  }, [onSkillSelect, activeCharacter])
  useEffect(() => {
    clear()
  }, [])

  return (
    <FlexContainer $full style={{ height: '100%' }}>
      <FlexContainer $full $direction='column'>
        <CombatQueue queue={queue} characters={characters} />
        <FlexContainer
          $direction='column'
          $full
          style={{ padding: '30px 10px 0 10px' }}
        >
          <FlexContainer
            $direction='column'
            style={{ marginBottom: 24, minHeight: 112 }}
          >
            <CombatParty party={enemyParty} />
          </FlexContainer>
          <FlexContainer $full>
            {isRunning && activeCharacter && (
              <>
                <FullContainer />
                <FlexContainer $direction='column'>
                  <FullContainer />
                  <div style={{ marginTop: 24 }}>
                    {!isRenderingResult && <CombatActions />}
                    <RoundResultRenderer isModal={false} />
                  </div>
                  <FullContainer />
                </FlexContainer>
                <FlexContainer $full style={{ justifyContent: 'flex-end' }}>
                  <FlexContainer $direction='column'>
                    <CombatLog />
                  </FlexContainer>
                </FlexContainer>
              </>
            )}
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}
