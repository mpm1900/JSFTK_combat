import React, { useEffect } from 'react'
import { useCombatContext } from '../contexts/CombatContext'
import { FlexContainer, FullContainer } from '../elements/flex'
import { RoundResultRenderer } from '../components/RoundResultRenderer'
import { CombatActions } from '../components/CombatActions'
import { CombatParty } from '../components/CombatParty'
import { useModalContext } from '../contexts/ModalContext'
import { CombatQueue } from '../components/CombatQueue'
import { CombatLog } from '../components/CombatLog'
import { useUIContext } from '../contexts/UIContext'
import { useCombatLogContext } from '../contexts/CombatLogContext'

export const Combat = () => {
  const {
    enemyParty,
    activeCharacter,
    characters,
    queue,
    isRunning,
    isRenderingResult,
    start,
    onSkillSelect,
    reset,
  } = useCombatContext()
  const { clear } = useCombatLogContext()
  const { setOnCharacterConsumableClick } = useUIContext()
  const { open, close } = useModalContext()

  useEffect(() => {
    if (!isRunning) {
      open(
        <div style={{ textAlign: 'center' }}>
          <h1>Combat Start!</h1>
        </div>,
      )
      setTimeout(() => {
        close()
        clear()
        start()
      }, 1000)
    }
    return () => {
      reset()
      clear()
    }
  }, [])

  useEffect(() => {
    setOnCharacterConsumableClick((c, index, item) => {
      if (!c) return
      if (c.id === activeCharacter.id) {
        onSkillSelect(item.skill, index)
      }
    })
  }, [onSkillSelect, activeCharacter])

  return (
    <FlexContainer $full style={{ height: '100%' }}>
      <FlexContainer $full $direction='column'>
        <CombatQueue queue={queue} characters={characters} />
        <FlexContainer
          $direction='column'
          $full
          style={{ padding: '30px 10px' }}
        >
          <FlexContainer $direction='column' $full>
            <CombatParty party={enemyParty} />
          </FlexContainer>
          <FlexContainer $full>
            {isRunning && activeCharacter && (
              <>
                <FullContainer />
                <FlexContainer $direction='column'>
                  {!isRenderingResult && <CombatActions />}
                  <RoundResultRenderer isModal={false} />
                </FlexContainer>
                <FlexContainer $full style={{ justifyContent: 'flex-end' }}>
                  <CombatLog />
                </FlexContainer>
              </>
            )}
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}
